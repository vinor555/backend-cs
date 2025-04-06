const externalApiService = require('./externalApiService');
const { Skin, Agent, Crate, Key } = require('../models');

const transformSkin = (skinData) => {
  return {
    id: skinData.id,
    name: skinData.name,
    description: skinData.description,
    crates: skinData.crates ? skinData.crates.map(c => ({ id: c.id, name: c.name, image: c.image })) : [],
    team: skinData.team ? skinData.team.name : null,
    image: skinData.image,
  };
};

const transformAgent = (agentData) => {
  return {
    id: agentData.id,
    name: agentData.name,
    description: agentData.description,
    team: agentData.team ? agentData.team.name : null,
    image: agentData.image,
  };
};

const transformCrate = (crateData) => {
  return {
    id: crateData.id,
    name: crateData.name,
    description: crateData.description,
    image: crateData.image,
  };
};

const transformKey = (keyData) => {
  return {
    id: keyData.id,
    name: keyData.name,
    description: keyData.description,
    crates: keyData.crates ? keyData.crates.map(c => ({ id: c.id, name: c.name, image: c.image })) : [],
    image: keyData.image,
  };
};

exports.syncData = async () => {
  try {
    // sync Skins
    const skinsData = await externalApiService.fetchData('skins');
    for (const skin of skinsData) {
      const transformed = transformSkin(skin);
      await Skin.upsert(transformed);
    }
    console.log('Skins sincronizadas.');

    // sync Agents
    const agentsData = await externalApiService.fetchData('agents');
    for (const agent of agentsData) {
      const transformed = transformAgent(agent);
      await Agent.upsert(transformed);
    }
    console.log('Agents sincronizadas.');

    // sync Crates
    const cratesData = await externalApiService.fetchData('crates');
    for (const crate of cratesData) {
      const transformed = transformCrate(crate);
      await Crate.upsert(transformed);
    }
    console.log('Crates sincronizadas.');

    // sync Keys
    const keysData = await externalApiService.fetchData('keys');
    for (const key of keysData) {
      const transformed = transformKey(key);
      await Key.upsert(transformed);
    }
    console.log('Keys sincronizadas.');
  } catch (error) {
    console.error('Error durante la sincronización:', error);
  }
};