import express from 'express';
//import morgan from 'morgan';
import Models from './models/init-models.js'; //esto es de prueba
//import userRoutes from './routes/users.routes.js'

const app = express();

//app.use(morgan('dev'));
//app.use(express.json());

//rutas
//app.use(userRoutes);


//abajo agrega los controladores

const routes = express.Router();

const { users, status, use_vip } = Models()

routes.get('/test', async (request, response) => {
    try {
        const result = await use_vip.findAll();
        response.json(result);

    } catch (error) {
        console.log('error -->', error)
        response.status(400).json({
            message: error.message
        })
    }
});

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));

export default app;