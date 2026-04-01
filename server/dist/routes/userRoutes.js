"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = require("../controllers/userController");
const checkIdParam_1 = require("../middlewares/checkIdParam");
const router = (0, express_1.Router)();
/*router.get('/', async (req: Request, res: Response) => {
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
export default router;*/
/**
* @swagger
* /api/users:
*  get:
*    summary: Récupère la liste des utilisateurs
*    tags: [Users]
*    responses:
*      200:
*        description: Liste utilisateur récupérée avec succès
*      500:
*        description: Erreur serveur
*/
router.get("/", userController.getAllUsers);
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Prenom
 *               - Nom
 *             properties:
 *               Prenom:
 *                 type: string
 *               Nom:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */
router.post("/", userController.createUser);
/**
* @swagger
* /api/users/{:id}:
*  delete:
*    summary: supprime l'utilisateur demandé
*    tags: [Users]
*    parameters:
*      - in: path
*        name: id
*        required: true
*        schema:
*          type: integer
*    responses:
*      200:
*        description: Succès
*      404:
*        description: Utilisateur non trouvé
*      500:
*        description: Erreur serveur
*/
router.delete("/:id", checkIdParam_1.checkIdParam, userController.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map