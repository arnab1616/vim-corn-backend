import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
    user: 'uwz4sogwbj6zp97hyvpv',
    host: 'bf0jbrz8e06rhjjlomlu-postgresql.services.clever-cloud.com',
    database: 'bf0jbrz8e06rhjjlomlu',
    password: '8zRLOTBf9ofYd8jw0BqEFxOetlzXRn',
    port: '50013',
});

export default db;
