/*
  Events routes
  /api/events
*/
const { Router } = require("express");

const { validarJWT } = require("../middleware/validar-jwt");
const { getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const { isDate } = require("../helpers/isDate");
const router = Router();



//Todas tienen que pasar por la validacion del JWT
router.use( validarJWT );

//Obtener eventos
router.get('/', getEvent);

//Crear un nuevo event
router.post(
  '/',
  [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
  ],
  createEvent);

//Actualizar event
router.put('/:id', updateEvent);

//Eliminar Event
router.delete('/:id', deleteEvent);

module.exports = router;
