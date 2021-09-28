const {DataType} = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define('User' , {
    //Defining a schema of the table named User
    fullName: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type:DataType.STRING,
        allowNull :false
    },
    password: {
        type: DataType.STRING,
        allowNull:false
    }
});

module.exports = User;
