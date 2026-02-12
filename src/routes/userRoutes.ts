import express, {Router, Request, Response} from 'express';
import User from '../models/User';
const router = Router();



router.get('/', async (req: Request, res: Response) => {
    try{
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({error: 'Problème serveur'})
    }
});

router.get('/:id', async (req: Request<{id: string}>, res: Response) => {
  try{
    const user = await User.findByPk(req.params.id);
    if (!user){
      return res.status(404).json({message: 'Utilisateur introuvable'});
    }
    res.json(user);
  }catch(error){
    res.status(500).json({error: 'Problème serveur'});
  }
});

router.post('/', async (req: Request, res: Response) => {
  try{
    const {Prenom, Nom} = req.body;
    const newUser = await User.create({Prenom, Nom});

    res.status(201).json(newUser);
  }catch(error){
    res.status(400).json({error: 'Erreur de la création'});
  }
});

router.put('/:id', async (req: Request<{id: string}>, res: Response) => {
  try{
    const user = await User.findByPk(req.params.id);
    if(!user){
      return res.status(404).json({message: "Pas d'utilisateur trouvé"});
    }
    await user.update(req.body);
    res.json(user);
  }catch(error){
    res.status(400).json({error: 'Erreur de mise a jour'});
  }
})
export default router;