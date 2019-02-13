module.exports = function(sequelize, DataTypes) {
    var Liked = sequelize.define("Liked", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        liked: {
            type: DataTypes.INTEGER,
            allowNull: false 
        }
    },{
        timestamps: false
    });
    return Liked;
}