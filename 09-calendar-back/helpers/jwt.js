const jwt = require('jsonwebtoken');

// Recibe lo que se va a cifrar en el payload
const generarJwt = (uid, name)=>{
    return new Promise((resolve, reject)=>{
       const paylolad = {uid, name};
       jwt.sign(paylolad,process.env.SECRET_JWT,{
           expiresIn:'2h'
       }, (err, token)=>{
           if(err){
               reject('No se pudo generar el token '+err);
           }
           // resolver promesa
           resolve(token);
       });
    });
}

module.exports = {
    generarJwt
}