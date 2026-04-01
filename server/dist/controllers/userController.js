"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getAllUsers = void 0;
const User_1 = require("../models/User");
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User_1.default.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
const createUser = async (req, res, next) => {
    try {
        const { Prenom, Nom } = req.body;
        const newUser = await User_1.default.create({ Prenom, Nom });
        res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
    ;
};
exports.createUser = createUser;
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User_1.default.destroy({
            where: { id },
        });
        res.status(200).json({ message: 'Utilisateur supprimé' });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map