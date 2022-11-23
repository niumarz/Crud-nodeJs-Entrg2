//? Dependencies (importar express- inicializar servidor con express)
const express = require('express')

//? importar el Router(para finarlizar)
const userRouter = require('./users/users.router')

//? Definir el puerto en el que vamos ejecutar la app
const port = 9000

//? Inicializar la app
const app = express()

//? habilitar el para poder recibir la informacion en formato .json
app.use(express.json())


//? Ruta base
app.use('/', userRouter)

//?start server
app.listen(port, () => {
    console.log `Server started at port ${port}`
}) 