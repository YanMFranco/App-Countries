const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('tourism', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                max: 5,
                min: 1,
            }
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM('Todo el año','primavera', 'verano', 'otoño', 'invierno')
        }
    }, {
        timestamps: false
    }
    )
}