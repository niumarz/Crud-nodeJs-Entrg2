//? Dependencias
const router = require('express').Router()

//? Importar Archivos
const userServices = require('./users.services')

//? RUtas
router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)

router.get('/users/:id', userServices.getUserById)
router.delete('/users/:id', userServices.deleteUser)

module.exports = router