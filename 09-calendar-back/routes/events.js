const express = require('express');
const router = express.Router();
const {validarJwt} = require('../middlewares/validar-token');
const {getEventos,actualizarEvento,crearEvento,borrarEvento} = require('../controllers/events');
const {validarCampos} = require('../middlewares/validar-campos');
const {check} = require('express-validator');
const {isDate} = require('../helpers/isDate');

// Validar el token en todas las peticiones
router.use(validarJwt);

router.get('/', getEventos);

router.put('/:id', 
            [
                check('title', 'el titulo es obligatorio').not().isEmpty(),
                check('start', 'la fecha inicial es obligatorio').custom(isDate),
                check('end', 'la fecha final es obligatorio').custom(isDate),
                validarCampos
            ],            
            actualizarEvento);

router.post('/',
            [
                check('title', 'el titulo es obligatorio').not().isEmpty(),
                check('start', 'la fecha inicial es obligatorio').custom(isDate),
                check('end', 'la fecha final es obligatorio').custom(isDate),
                validarCampos
            ]
            ,crearEvento);

router.delete('/:id', borrarEvento);

module.exports = router;