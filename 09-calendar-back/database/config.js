const mongoose = require('mongoose');

const bdConnection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT, 
                              {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log('db online');
    } catch(error){
        console.log(error);
        throw new error('Error al conectar a la base de datos')
    }
}

module.exports = {
    bdConnection
}