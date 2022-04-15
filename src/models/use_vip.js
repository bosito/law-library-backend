import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class use_vip extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image_profile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    loaction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    day_pay: {
      type: DataTypes.DATE,
      allowNull: true
    },
    final_suscription: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'use_vip',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "use_vip_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
