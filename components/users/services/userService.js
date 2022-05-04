let faker = require("faker");
faker.locale = 'en';
class User {
    static users = [];
    async populate(cant = 50){
      try {
        for (let i = 0; i < cant; i++) {
          User.users.push({
              id: i + 1,
              nombre: faker.name.firstName(),
              apellido: faker.name.lastName(),
              color: faker.internet.color()
          });
        }
        return User.users;          
      } catch (error) {
        console.log(error);
      }
    }

    async get(id = null){
      try {
        return id ? User.users.filter(obj => obj.id == id) : User.users;            
      } catch (error) {
        console.log(error);
      }
    }

    async create(obj){
      try {
        User.users.push({id:User.users.length + 1, ...obj})
        return User.users;     
      } catch (error) {
        console.log(error);
      }
    }

    async update(id, obj){
      try {
        User.users = User.users.map(user =>{
          if( user.id == id ){
            user = {id, ...obj};
          }
          return user;
        });
        return User.users;     
      } catch (error) {
        console.log(error);
      }
    }

    async delete(id){
      try {
        console.log("Eliminando el usuario ", id);
        User.users = User.users.filter(obj => obj.id !== Number(id));
        return User.users;     
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = new User();