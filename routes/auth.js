/*
  Rutas de Usuario / auth
  host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

router.post(
  '/new', 
  [//middleware
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 o mas caracteres').isLength({ min: 6}),
    validarCampos
  ],
  crearUsuario );

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 o mas caracteres').isLength({ min: 6}),
    validarCampos
  ],
  loginUsuario );

router.get(
  '/renew',
  validarJWT,
  revalidarToken );

module.exports = router;