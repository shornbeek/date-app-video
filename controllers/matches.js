const {Matches} = require("./../models");
const {Liked} = require("./../models");
console.log(Matches);
//finds if there are matches for a user
const findMatch = (currentUserId,array) => {
    let matches = [];
    for(let i = 0; i < array.length; i++){
        if (currentUserId === array[i].userId){
            for (let j = 0; j < array.length - 1;j++){
                if((currentUserId === array[j].liked) && (array[j].userId === array[i].liked)){
                    let obj = {
                        user1 : array[i].userId,
                        user2 : array[j].userId
                    }
                    matches.push(obj);

                }
            }
        }
    }
    return matches;
}

module.exports = {
    makeMatch(req,res){
        Liked.findAll().then(result => {
            let userMatches = findMatch(req.body.id, result);
            userMatches.forEach(item => {
                Matches.create({
                    user1Id: item.user1,
                    user2Id: item.user2
                }).then(() => {
                    console.log(`Created match between user ${item.user1} and ${item.user2}`);
                    res.end();
                }).catch(err => {
                    if(err) throw err;
                });
            })
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        })
    },

    findMatch(req,res){
        Matches.findAll({
            where: {
                $or: [{user1Id:req.body.userId}, {user2Id:req.body.userId}]
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if (err) throw err;
        })
    },

    updateMatch(req,res){
        Matches.update({
            user1Waved: req.body.user1Waved,
            user2Waved: req.body.user2Waved,
            user1Active: req.body.user1Active,
            user2Active: req.body.user2Active,
            canCall: req.body.canCall
        },{
            where: {
                user1Id: req.body.user1Id,
                user2Id: req.body.user2Id
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    },

    destroyMatch(req,res){
        Matches.destroy({
            force:true,
            where: {
                user1Id: req.body.user1Id,
                user2Id: req.body.user2Id
            }
        }).then(() => {
            Liked.destroy({
                force:true,
                where: {
                    $or: [{userId: req.body.user1Id, liked: req.body.user2Id}, {userId: req.body.user1Id, liked: req.body.user2Id}]
                }
            }).then(() => {
                console.log(`Removed match and parent likes for users ${req.body.user1Id} and ${req.body.user2Id}`);
            }).catch(err => {
                if (err) throw err;
            })
        }).catch(err=> {
            if (err) throw err;
        });
    }

}