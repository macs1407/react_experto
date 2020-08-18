// Rutas de usuario host + /api/auth
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {validarJwt} = require('../middlewares/validar-token');

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');

router.post('/new'
            // Middleware de express-validator
            ,[
                check('name', 'el nombre es obligatorio').not().isEmpty(),
                check('email', 'el email es obligatorio').not().isEmpty(),
                check('email', 'el email es invalido').isEmail(),
                check('password', 'la conatraseña es obligatoria').not().isEmpty(),
                check('password', 'la conatraseña debe contener almenos 6 caracteres').isLength({min:6}),
                validarCampos
            ]
            ,crearUsuario);

router.post('/'
            // Middleware de express-validator
            ,[
                check('email', 'el email es obligatorio').not().isEmpty(),
                check('email', 'el email es invalido').isEmail(),
                check('password', 'la conatraseña es obligatoria').not().isEmpty(),
                validarCampos
            ]            
            ,loginUsuario);

router.get('/renew', validarJwt, revalidarToken);

module.exports = router;
