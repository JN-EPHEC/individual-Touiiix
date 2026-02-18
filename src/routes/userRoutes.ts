import express, {Router, Request, Response} from 'express';
import User from '../models/User';
import { error } from 'console';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users); 
});

router.post('/', async (req: Request, res: Response) => {
  try{
  const {Prenom, Nom} = req.body;
  if(!Prenom || Prenom.trim() === ""){
    return res.status(400).send({error: "Il faut un Prénom"});
  }
  const newUser = await User.create({Prenom, Nom});
  return res.status(201).send(`Utilisateur créé avec succès : ${newUser}`);
  }catch(error){
    return res.status(500).send({error: "erreur du serveur"})
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try{
  const {id} = req.params;

  const supprime = await User.destroy({
    where: {id},
  });
  if (supprime === 0){
    return res.status(404).send({error: "l'utilisateur n'existe pas"});
  }
  res.send(`Utilisateur supprimé ${id}`);
}catch(error){
  return res.status(500).send({error: "erreur du serveur"})
}
})
export default router;