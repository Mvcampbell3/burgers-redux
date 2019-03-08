module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("burger", {
        name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
};