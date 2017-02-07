import Sequelize from 'sequelize';
import {
  database
} from '../config';

const sequelize = new Sequelize(
  database.name,
  database.username,
  database.password, 
  {
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
  }
);

export default sequelize;