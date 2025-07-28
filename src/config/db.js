import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅Conectado a MongoDB');
    } catch (error) {
        console.log('Error al conectar a la BD : '+error);
    }
};