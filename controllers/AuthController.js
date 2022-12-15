const User = require("../models/User");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const bcrypt = require("bcryptjs");

class AuthController{
  async login(userEmail, password) {
    let user = await User.findOne({
      where: {
        [Op.or]: {
          username: userEmail,
          email: userEmail,
        },
      },
    });

    if (user) {
      let passVerify = bcrypt.compareSync(password, user.password);
      if (passVerify){
        const { email, username, name, id, role, active } = data;
          return {
            result: {
              msg: "Usuário logado com sucesso",
              token: token,
              user: {
                email, username, name, id, role, active
              },
            },
            status: 200,
        };
      }
    }
    return {
      result: "Dados inválido.",
      status: 401,
    };
  }
}

module.exports = AuthController;
