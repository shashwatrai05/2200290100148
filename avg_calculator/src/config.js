require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 9876,
  WINDOW_SIZE: parseInt(process.env.WINDOW_SIZE) || 10,
  THIRD_PARTY_BASE_URL: process.env.THIRD_PARTY_BASE_URL || 'http://20.244.56.144/evaluation-service', 
  AUTH_TOKEN: process.env.AUTH_TOKEN, 
};
