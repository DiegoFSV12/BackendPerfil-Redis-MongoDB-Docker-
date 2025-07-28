import { createClient } from 'redis';

const client = createClient({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
});

export const connectRedis = async () => {
    try {
        await client.connect();
        console.log('✅Conectado a Redis');
    } catch (error) {
        console.log('Error al conectar a Redis : '+error);
    }
};

export default client;