const User = require("../models/User");
const { Sequelize } = require("sequelize");

class UserController{
    async createUser(data) {
        try {
            data.password = bcrypt.hashSync(data.password, 10);
            const user = await User.create(data);

            return {
                status: 200,
                result: `Usuário ${user.id} criado com sucesso!!!`,
            };
        } catch (err) {
            return {
                status: 500,
                result:
                    "Um erro genérico ocorreu, contate o administrador do sistema." +
                    err.toString(),
            };
        }
    }
    
  async getUser(id) {
    try {
      const result = await User.findByPk(id);
      return {
        status: 200,
        result: result,
      };
    } catch (err) {
      return {
        status: 500,
        result: "Um erro genérico ocorreu, contate o administrador do sistema.",
      };
    }
  }

  async updateUser(id, data) {
    try {
      await User.update(data, {
        where: {
          id: id,
        },
      });
      return {
        status: 200,
        result: `Usuário ${id} ataualizado com sucesso!`,
      };
    } catch (err) {
      return {
        status: 500,
        result: "Um erro genérico ocorreu, contate o administrador do sistema.",
      };
    }
  }
}

module.exports = UserController;
