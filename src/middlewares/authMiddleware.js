import { verifyToken } from "../helpers/jwt.js";

export const authMiddleware = (req,res,next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'Token no proporcionado o malformado' });
    }
    
    const token = authHeader.split(' ')[1]; // obtenemos solo el token

    const decodeToken = verifyToken(token);
    if(!decodeToken)return res.status(401).json({ message: 'Token inválido o expirado' });

    req.user = decodeToken; //Con esto guardo la info en la request
    next();
};