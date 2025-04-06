const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { syncDB } = require('./models');
const { syncData } = require('./services/syncService');

const skinRoutes = require('./routes/skinRoutes');
const agentRoutes = require('./routes/agentRoutes');
const crateRoutes = require('./routes/crateRoutes');
const keyRoutes = require('./routes/keyRoutes');
const exportRoutes = require('./routes/exportRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/skins', skinRoutes);
app.use('/agents', agentRoutes);
app.use('/crates', crateRoutes);
app.use('/keys', keyRoutes);
app.use('/export', exportRoutes);

app.get('/', (req, res) => {
  res.send('CSGO Backend API');
});

const startServer = async () => {
  await syncDB();
  await syncData(); // Carga inicial de datos desde la API externa
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
};

startServer();