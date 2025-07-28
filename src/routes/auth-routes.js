import { Router } from 'express';
import { login, register } from '../controllers/auth-controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();
router.post('/login', login);
router.post('/register', register);

//Ruta de prueba para ver si funciona JWT
router.get('/perfil', authMiddleware, (req, res) => {
    res.json({ message: `Hola, ${req.user.username}` });
});

export default router;
