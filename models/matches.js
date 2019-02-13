module.exports = function(sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", {
        user1Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user2Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user1Waved: {
            type: DataTypes.BOOLEAN
        },
        user2Waved: {
            type: DataTypes.BOOLEAN
        },
        user1Active: {
            type: DataTypes.BOOLEAN
        },
        user2Active: {
            type: DataTypes.BOOLEAN
        },
        canCall: {
            type: DataTypes.BOOLEAN
        }
    });
    return Matches;
}