/*comandos no terminal
    npm init -y
    npm i express cors dotenv nodemon mysql2 multer
    npm start
*/

import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import filmeController from './controller/filmeController.js'

//configura servidor
const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//adiciona controllers
servidor.use(filmeController);


//inicia API
const PORT = process.env.PORT;
servidor.listen(PORT, () => console.log(`A API subiu com sucesso na porta ${PORT}`));

