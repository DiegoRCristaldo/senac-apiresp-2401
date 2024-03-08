import * as db from '../repository/filmeRepository.js'
import * as validacoes from '../services/filmeValidacao.js'

import { Router } from "express";
const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {
    try{
        const filme = req.body;

        validacoes.validarFilme(filme);
        const r = await db.inserir(filme);

        resp.send(r);
    }
    catch(err){
        resp.status(500).json({
            erro: err.message
        })
    }
})

endpoints.get('/filme', async (req, resp) => {
    try{
        const nome = req.query.nome;
        const r = await db.consultar(nome);

        if(r.length == 0)
            throw new Error("Nenhum filme foi encontrado")

        resp.send(r);
    }
    catch(err){
        resp.status(404).json({
            erro: err.message
        })
    }
})

endpoints.get('/filme/:id', (req, resp) => {
    try{

    }
    catch(err){
        resp.status(500).json({
            erro: err.message
        })
    }
})

endpoints.put('/filme/:id', (req, resp) => {
    try{

    }
    catch(err){
        resp.status(500).json({
            erro: err.message
        })
    }
})

endpoints.put('/filme/:id/imagem', (req, resp) => {
    try{

    }
    catch(err){
        resp.status(500).json({
            erro: err.message
        })
    }
})

endpoints.delete('/filme/:id', (req, resp) => {
    try{

    }
    catch(err){
        resp.status(500).json({
            erro: err.message
        })
    }
})

export default endpoints;