import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _status from  "./status.js";
import _use_vip from  "./use_vip.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const status = _status.init(sequelize, DataTypes);
  const use_vip = _use_vip.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  status.belongsTo(use_vip, { as: "user_vip", foreignKey: "user_vip_id"});
  use_vip.hasMany(status, { as: "statuses", foreignKey: "user_vip_id"});
  status.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(status, { as: "statuses", foreignKey: "user_id"});

  return {
    status,
    use_vip,
    users,
  };
}
