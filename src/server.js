import dotenv from 'dotenv';
import app from './app.js';

dotenv.config(); // Obteniendo las variables de entorno del proyecto

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});
