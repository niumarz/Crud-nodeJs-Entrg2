//?importar controladores
const userControllers = require('./users.controllers')

//? Obtener todos los usuarios
const getAllUsers = (req, res) => {
  const data = userControllers.showAllUsers()
  res.status(200).json(data)
}

//? Obtener el usuario segun el ID
const getUserById = (req, res) => {
    const id = req.params.id
    const data = userControllers.findUserById(id)
    if (data) {
    //?Usuario Encontrado
      res.status(200).json(data)
    } else {
      //!Error
      res.status(404).json({
        message: 'invalid User ID '
      })
    }
  }

  //? Crear un usuaruo nuevo    
  const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body
    if (first_name && last_name && email && password && birthday) {
      const data = userControllers.createNewUser({ first_name, last_name, email, password, birthday })
      res.status(201).json(data)
    } else {
      res.status(400).json({
        message: 'invalid data',
        correct_format_data: {
          first_name: 'string',
          last_name: 'string',
          email: 'string',
          password: 'string',
          birthday: 'YYYY/MM/DD'
        }
      })
  
    }
  }

  const deleteUser = (req, res) => {
    const id = req.params.id
    const data = userControllers.deleteUserById(id)
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(400).json({
        message: 'invalid User ID'
      })
    }
  
  }
  
  
  module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser
  }