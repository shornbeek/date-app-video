var db = require("./models");

// creat user 

db.User.create({
    name: username,
    email: useremail,
    photo: userphoto,
    sex: usersex,
    age: userage,
    description: userdescription,
    interests: userinterests,
    findMan: userfindMan,
    findWoman: userfindWoman
}).then(() => {
    console.log("user created");
});

//find current user's info

db.User.findAll({
    where: {
        id: currentUserId
    }
}).then(result => {
    console.log(result);
})

//find users that they are looking for

db.User.findAll({
    where: {
        id: currentUserId //try and save the result of this instead of needing to do another search
    }
}).then(result => {
    if (result.findMan === true && result.findWoman === true){
        db.User.findAll({
            where: {
                id: !currentUserId //need to find out if this works
            }
        }).then(result => {
            console.log(result);
        }) 
    }else if (result.findMan === true){
        db.User.findAll({
            where: {
                sex: false //sex is set to false for male users
            }
        }).then(result => {
            console.log(result);
        })
    }else{
        db.User.findAll({
            where: {
                sex: true //sex is set to true for female users
            }
        }).then(result => {
            console.log(result);
        })
    }
})

// create a liked instance

db.Liked.create({
    user1: currentUserId,
    liked: likedUserId
}).then(() => {
    console.log("Like created");
});

// finds if there are matches for a user and creates them if they exist

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

db.Liked.findAll({}).then(result => {
    let userMatches = findMatch(currentUserId, result);
    userMatches.forEach(item => {
        db.Matches.create({
            user1Id: item.user1,
            user2Id: item.user2
        }).then(() => {
            console.log(`Created match between user ${item.user1} and user ${item.user2}`);
        });
    });
});

// find matches

db.Matches.findAll({
    where: {
        [Op.or]: [{user1Id:currentUserId}, {user2:currentUserId}]
    }
}).then(results => {
    console.log(results);
})

// update a match

db.Matches.update({
    user1Waved: true
}).then(() => {
    console.log("Updated");
});

// delete a match and the associated likes that created it

db.Matches.destroy({
    force: true,
    where: {
        user1Id: currentUserId,
        user2Id: matchedUserId
    }
}).then(() => {
    console.log("Deleted match")
});

db.Liked.destroy({
    force: true,
    where: {
        [Op.or]: [{userId: currentUserId, liked: matchedUserId}, {userId: matchedUserId, liked: currentUserId}]
    }
}).then(() => {
    console.log("Deleted likes")
});

