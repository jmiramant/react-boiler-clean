import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  firstName: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  lastName: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

}, {

  indexes: [
    { fields: ['firstName', 'lastName', 'email'] },
  ],

});

export default User;
