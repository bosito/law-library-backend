import _sequelize from "sequelize";
import _status from "./status.js";
import _use_vip from "./use_vip.js";
import _users from "./users.js";
import config from '../config/config.js';

const { DataTypes, Sequelize } = _sequelize;

export default function initModels() {

  const env = process.env.NODE_ENV || 'development';

  //console.log('env -->', env)

  let sequelize;
  const configObj = config[env];

  //console.log('config -->', configObj)

  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(
      configObj.database,
      configObj.username,
      configObj.password,
      {
        host: configObj.host,
        dialect: configObj.dialect
      }
    );
  };

  function dbConetction(){
    try {
      sequelize.authenticate(); 
      console.log('la base de datos esta conectada');

    } catch (error) {
      console.log('test',error)
    };
  };

  dbConetction();

  const status = _status.init(sequelize, DataTypes);
  const use_vip = _use_vip.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  status.belongsTo(use_vip, { as: "user_vip", foreignKey: "user_vip_id" });
  use_vip.hasMany(status, { as: "statuses", foreignKey: "user_vip_id" });
  status.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(status, { as: "statuses", foreignKey: "user_id" });

  return {
    status,
    use_vip,
    users,
  };
}
