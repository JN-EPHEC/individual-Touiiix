"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
}
User.init({
    // Model attributes are defined here
    Prenom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Nom: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull defaults to true
    },
}, {
    // Other model options go here
    sequelize: database_1.default, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});
// the defined model is the class itself
exports.default = User;
//# sourceMappingURL=User.js.map