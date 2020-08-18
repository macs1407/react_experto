// Obntener el tipado
const {response} = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const {generarJwt} = require('../helpers/jwt');

// Logica que lleva todo el control de las rutas
// resp = express.response se hace esto para que no se pierda el autocompletado
const crearUsuario = async(req, resp = response)=>{
    // req = solicitud, resp = respuesta que se devuelve
    const {email,password} = req.body;
    // Validar que el email no exista

    try{
        // Todos las consultas de mongo son promesas
        let usuario = await Usuario.findOne({email:email});
        // Si no existe ese correo electropnico
        if(usuario){
            return resp.status(400).json({
                ok:true,
                msg:'El usuario ya existe con ese correo'
            });
        } else{
            usuario = new Usuario(req.body);
            // Encriptar contraseña
            const salt = bcrypt.genSaltSync(10);
            usuario.password = bcrypt.hashSync(password, salt);
            // Grabar en usuario de base de datos
            await usuario.save();
            // Generar token
            const token = await generarJwt(usuario.id, usuario.name);
            return resp.status(201).json({
                ok:true,
                uid:usuario.id,
                nane:usuario.name,
                token
            });
        }
        
    }catch(error){
        return resp.status(500).json({
            ok:false,
            msg:'Ocurrio un error, hable con el administrador'
        })
    }
}

const loginUsuario = async(req, resp = response)=>{
    const {email, password} = req.body;
    // Manejo de errores con express validator
    try {
        let usuario = await Usuario.findOne({email:email});
        if(!usuario){
            return resp.status(400).json({
                ok:false,
                msg:"Email no existe"
            });
        } else {
            // Confirmar las contraseñas
            const validPassword = bcrypt.compareSync(password, usuario.password);
            if(!validPassword){
                return resp.status(400).json({
                    ok:false,
                    msg:"Contraseña incorrecta"
                })
            }
            // Generar token
            const token = await generarJwt(usuario.id, usuario.name);
            console.log(usuario);
            return resp.status(200).json({
                ok:true,
                uid:usuario.id,
                name:usuario.name,
                token
            })
        }
    }catch(error){
        return resp.status(500).json({
            ok:false,
            msg:'Ocurrio un error, hable con el administrador '+error
        })
    }
}

const revalidarToken = async(req, resp = response)=>{
    // En la peticion ya biene el uid y el name por que pasa por el validar-token y este setea esos valores
    const {uid, name} = req;
    // generar un nuevo token
    const token = await generarJwt(uid, name);

    resp.json({
        ok:true,
        uid, 
        name,
        token
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}