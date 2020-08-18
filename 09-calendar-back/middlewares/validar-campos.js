const {response} = require('express');
const {validationResult} = require('express-validator');

// Un middleware es una funcion que se ejecuta antes de la peticion
const validarCampos = (req, resp = response, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
    }
    // El next se llama cuando el middleware se ejecuta correctamente
    next();
}

module.exports = {
    validarCampos
}