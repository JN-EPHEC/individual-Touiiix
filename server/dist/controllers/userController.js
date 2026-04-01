import User from "../models/User";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
};
export const createUser = async (req, res, next) => {
    try {
        const { Prenom, Nom } = req.body;
        const newUser = await User.create({ Prenom, Nom });
        res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
    ;
};
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where: { id },
        });
        res.status(200).json({ message: 'Utilisateur supprimé' });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=userController.js.map