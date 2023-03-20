const { check, body } = require('express-validator')

module.exports = [
    body("nombre")
    .notEmpty().withMessage("El nombre es obligatorio. Minimo 3 caracteres").bail()
    .isLength({min: 3}).withMessage("Minimo 3 caracteres"),

    body("email")
    .notEmpty().withMessage('Campo obligatorio').bail()
    .isEmail().withMessage('Debes ingresar un mail valido'),

    body("edad")
    .notEmpty().withMessage('Edad obligatoria(Rango entre 5 y 99 años)').bail()
    .isNumeric().isInt({min: 5, max: 99}).withMessage('Rango entre 5 y 99 años'),
]