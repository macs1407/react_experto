// Obntener el tipado
const {response} = require('express');
const Evento = require('../models/Evento');

const getEventos = async(req, resp = response)=>{
    // Traer los eventos, y ademas traer la relacion de los usuarios el nombre
    const eventos = await Evento.find().populate('user', 'name');

    return resp.status(200).json({
        ok:true,
        eventos
    })
}

const actualizarEvento = async(req, resp = response)=>{
    // Obtener una parametro
    const eventoId = req.params.id;
    // sacar el UID del usuario
    const {uid} = req;
    try {
        const evento = await Evento.findById(eventoId);
        if(!evento){
            return resp.status(404).json({
                ok:false,
                msg:'El evento no existe'
            });
        }
        // saber si persona que creo ese evento es la misma que va actualizar
        if(evento.user.toString() !== uid){
            return resp.status(401).json({
                ok:false,
                msg:'No tiene permisos para actualizar el evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }
        // {new:true}: retornar los datos actualizados que se acaban de insertar
        const eventoActualizar = await Evento.findByIdAndUpdate(eventoId,nuevoEvento, {new:true})

        return resp.status(200).json({
            ok:true,
            eventoActualizar
        })
    }catch(error){
        return resp.status(500).json({
            ok:false,
            msg:"Se ha presentado un error, hable con administrador "+error
        })
    }    
}

const crearEvento = async(req, resp = response)=>{
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid; // Biene del middleware de validar-token, osea del token
        const eventoGuardado = await evento.save();
        return resp.status(201).json({
            ok:true,
            eventoGuardado
        })
    } catch(error){
        return resp.status(500).json({
            ok:false,
            msg:"Se ha presentado un error, hable con administrador "+error
        })
    }

    
}

const borrarEvento = async(req, resp = response)=>{
    // Obtener el id para eliminar
    const eventoId = req.params.id;
    // Extraer el id del usuario del token
    const {uid} = req;
    try {
        const buscarEvento = await Evento.findById(eventoId);
        if(!buscarEvento){
            return resp.status(404).json({
                ok:false,
                msg:'El evento no existe'
            });
        }
        // Comprobar que el usuario sea el propietario del evento
        if(buscarEvento.user.toString() !== uid){
            return resp.status(401).json({
                ok:false,
                msg:'No tiene permisos para eliminar el evento'
            });
        }

        await Evento.findByIdAndRemove(eventoId);

        return resp.status(200).json({
            ok:true,
            msg:"Se elemino el evento"
        })
    }catch(error){
        return resp.status(500).json({
            ok:false,
            msg:"Se ha presentado un error, hable con administrador "+error
        })
    }
    
}

module.exports = {
    getEventos,
    actualizarEvento,
    crearEvento,
    borrarEvento
}