/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL || 'mysql';

export const database = {
  name: process.env.DB_NAME || 'athena_test',
  username: process.env.DB_USERNAME || 'athena_test_app',
  password: process.env.JWT_SECRET || 'Dc1-ca87'
};

export const auth = {

  jwt: {
    secret: process.env.JWT_SECRET || 'Super Secret'
  },

};