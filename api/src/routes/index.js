const { Router } = require('express');
const countries = require("./countries");
const tourism = require("./tourism");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries",countries);
router.use("/tourism",tourism);

module.exports = router;
