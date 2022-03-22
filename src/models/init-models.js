/* eslint-disable import/extensions */
import _sequelize from 'sequelize';
import config from '../config/config.js';  // Tomando los valores que me permiten conectarme a la DB del archivo config.js
import _users from './users.js';

const { DataTypes } = _sequelize;

export default function initModels() {
  const env = process.env.NODE_ENV || 'development';

  let sequelize;
  const configObj = config[env];

  if (config.use_env_variable) {
    sequelize = new _sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new _sequelize(
      configObj.database,
      configObj.username,
      configObj.password,
      configObj,
    );
  }

  // const status = _status.init(sequelize, DataTypes);
  // const tasks = _tasks.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  // tasks.belongsTo(status, { as: 'status', foreignKey: 'status_id' });
  // status.hasMany(tasks, { as: 'tasks', foreignKey: 'status_id' });
  // tasks.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  // users.hasMany(tasks, { as: 'tasks', foreignKey: 'user_id' });

  return {
    users
  };
}
