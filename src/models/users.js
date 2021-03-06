import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "Law"
    },
    lastname: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "Library"
    },
    ctivate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
