import express, {Router, Request, Response} from 'express';
import User from '../models/User';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users); 
});

router.post('/', async (req: Request, res: Response) => {
  const {Prenom, Nom} = req.body;
  const newUser = await User.create({Prenom, Nom});
  res.status(201).json(newUser);
  
});

router.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;

  await User.destroy({
    where: {id},
  });
  res.json({message: 'Utilisateur supprimé'});
})
export default router;