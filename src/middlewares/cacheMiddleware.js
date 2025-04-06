const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // Cache por 5 minutos

module.exports = (req, res, next) => {
  const key = '__express__' + (req.originalUrl || req.url);
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    return res.json(cachedResponse);
  } else {
    res.sendResponse = res.json;
    res.json = (body) => {
      cache.set(key, body);
      res.sendResponse(body);
    };
    next();
  }
};