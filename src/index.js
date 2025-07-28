import app from "./app.js";
import { connectRedis } from "./config/redis.js";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
    try {
        await connectDB();
        await connectRedis();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error al iniciar la app:', err);
    }
};
main();