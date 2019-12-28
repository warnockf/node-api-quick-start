import DotEnv from 'dotenv';

DotEnv.config();

const isDevelopment = process.env.NODE_ENV == 'development';

export default {
  isDevelopment,
  port: process.env.PORT,
};
