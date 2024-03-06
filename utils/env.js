import dotenv from 'dotenv';

dotenv.config();

const getEnvVar = (key) => {
  return process.env[key];
};

export default getEnvVar;
