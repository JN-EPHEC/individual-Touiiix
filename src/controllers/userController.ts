import type { Request, Response } from "express";
import User from "../models/User";
export const getAllUsers = async (req: Request, res: Response) => {
try {
const users = await User.findAll();
res.status(200).json(users);
} catch (error) {
res.status(500).json({ error: (error as any).message });
}
};

export const createUser = async (req: Request, res: Response) => {
    try{
        const {Prenom, Nom} = req.body;
        const newUser = await User.create({Prenom, Nom});
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error: 'Erreur lors de la création de l\'utilisateur'});
    };
};

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await User.destroy({
        where: {id},
        });
        res.status(200).json({message: 'Utilisateur supprimé'});
    }catch(error){
        res.status(500).json({error: 'L\'utilisateur n\'a pas pu etre supprimé'});
    }
}