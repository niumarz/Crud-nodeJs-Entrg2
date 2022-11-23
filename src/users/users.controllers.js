const usersDB = []
let id = 1

//?obtener el arreglo de todos los usuarios
const showAllUsers = () => {
    return usersDB
}

//? Obtener el usuario con solo en id indicado
const findUserById = (id) => {
    const filterUsers = usersDB.find((user) => user.id == id)
    return filterUsers
  }

  //? Crear un nuevo usuario
  const createNewUser = (user) => {

    const newUser = {
      id: id++,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
    }
    usersDB.push(newUser)
    return newUser
  }

  const deleteUserById = (id) => {
    usersDB.splice(id - 1, 1)
    return usersDB
  }
  
  //?exportar
  module.exports = {
    showAllUsers,
    findUserById, 
    createNewUser,
    deleteUserById
  }