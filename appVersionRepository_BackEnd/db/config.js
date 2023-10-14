import { Sequelize } from "sequelize";


export const db =new Sequelize({
    host: '127.0.0.1',
    dialect: "mssql",
    database: 'AppVersionRepository',
    username: 'erickRoot07',
    password: 'Hola.123',
    port: 51016,    
});