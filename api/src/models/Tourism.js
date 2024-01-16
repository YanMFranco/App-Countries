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
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM('primavera', 'verano', 'otoño', 'invierno')
        }
    }, {
        timestamps: false
    }
    )
}