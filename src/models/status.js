import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM("user_default","user_vip"),
      allowNull: false,
      defaultValue: "user_default"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_vip_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'use_vip',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
