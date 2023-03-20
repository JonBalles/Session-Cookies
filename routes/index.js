const express = require('express');
const router = express.Router();
const {index, processRegister, next, restart} = require('../Controllers/indexController')
const validacion = require("../validations/user")

/* GET home page. */
router
  .get('/', validacion, index )
  .post("/", validacion, processRegister)

  .get("/next", next)
  .post("/next", restart)

module.exports = router;
