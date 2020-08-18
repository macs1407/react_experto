const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJwt = (req, res=response, next)=>{
    // Obtener el parametro de la cabecera
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'no hay token en la peticion'
        })
    }
    try {
        // Extraer el payload
        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT);
        req.uid = uid;
        req.name = name;
    } catch(error){
        return res.status(401).json({
            ok:false,
            msg:'token no valido'
        })
    }
    next();
}

module.exports = {
    validarJwt
}