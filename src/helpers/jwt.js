import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();


const secretToken = `${process.env.JWT_SECRET}`;

export const generateToken = (payload, expiresIn='1h') => {
    return jwt.sign(payload, secretToken, {expiresIn});
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token,secretToken);
    } catch (error) {
        return null;
    }
}