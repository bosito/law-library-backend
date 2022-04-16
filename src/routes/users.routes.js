import { Router } from 'express';
import Models from '../models/init-models.js';
//abajo agrega los controladores

const routes = Router();

const { users } = Models()

routes.get('/', async (request, response) => {
    try {
        const result = await users.findAll();
        response.json(result);

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
});