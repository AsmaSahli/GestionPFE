const userController = require("../controllers/UserController");

module.exports=(app)=>{

    app.post("/createUser",userController.createUser);
    app.get("/findAllUsers",userController.getUsers);
    app.post("/signin",userController.signin)
    app.post("/signout",userController.signout)
    app.get("/getOneUser/:id",userController.getUserById);
    app.patch("/UpdateUser/:id",userController.UpdateUser);


}