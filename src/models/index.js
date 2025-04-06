const sequelize = require('../config/db');
const Skin = require('./Skin');
const Agent = require('./Agent');
const Crate = require('./Crate');
const Key = require('./Key');

const models = {
  Skin: Skin(sequelize),
  Agent: Agent(sequelize),
  Crate: Crate(sequelize),
  Key: Key(sequelize)
};

const syncDB = async () => {
  let retries = 10; // Número de reintentos
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos exitosa.');
      // Puedes usar force: true solo en desarrollo para recrear las tablas
      await sequelize.sync({ force: true });
      console.log('Base de datos sincronizada.');
      break;
    } catch (err) {
      console.error(`Error al conectar a la base de datos. Reintentando en 5 segundos... (${retries} intentos restantes)`, err.message);
      retries -= 1;
      // Espera 5 segundos antes de reintentar
      await new Promise(res => setTimeout(res, 5000));
    }
  }
  if (!retries) {
    console.error('No se pudo conectar a la base de datos después de varios intentos.');
    process.exit(1);
  }
};

module.exports = {
  ...models,
  syncDB,
};