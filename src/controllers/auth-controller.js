import { generateToken } from "../helpers/jwt.js";
import User from "../model/User.js";
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    try {
        console.log("LOGIN...");
        const { username, email, password } = req.body;
        const usuario = await User.findOne({ username, email});
        if (!usuario) return res.status(404).send("Usuario no encontrado");
        const passwordMatch = await bcrypt.compare(password,usuario.password);
        if (!passwordMatch)return res.status(401).send("Contraseña incorrecta");

        //Generar el token con JWT
        const token = generateToken({
            id: usuario._id,
            username: usuario.username,
            email: usuario.email
        })
        return res.status(200).send(token);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error al iniciar sesión");
    }
};


export const register = async(req,res)=>{
    console.log("REGISTER...")
    const {username, email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(200).send("Usuario registrado")
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error al registrar usuario");
    }
};