let userService = require("../services/userService");
class User {

    async get(req,res,next){
      try {
        let {id} = req.params;
        if(!id) id = null;
        res.json(await userService.get(id));
      } catch (error) {
        console.log(error);
      }
    }

    async populate(req,res,next){
      try {
        let {cant} = req.query;
        if(!cant) cant = 50;
        res.json(await userService.populate(cant));
      } catch (error) {
        console.log(error);
      }
    }

    async create(req,res,next){
      try {
        res.json( await userService.create(req.body));
      } catch (error) {
        console.log(error);
      }
    }

    async update(req,res,next){
      try {
        let {id} = req.params;
        res.json( await userService.update(id, req.body));
      } catch (error) {
        console.log(error);
      }
    }

    async delete(req,res,next){
      try {
        let {id} = req.params;
        res.json( await userService.delete(id));
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = new User();