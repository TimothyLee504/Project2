module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define("Data", {
    age: {
    type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Data.associate = function(models) {
      Data.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Data;
};