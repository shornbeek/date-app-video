const {User} = require("./../models");

module.exports = {

    findUser(req, res) {
        User.findAll({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            if (err) throw err;
        });
    },

    ifExists(req,res) {
        User.count({
            where: {
                id: req.params.id
            }
        }).then(result => {
            if(result === 0){
                res.send(false);
            }else{
                res.send(true);
            }
        }).catch(err => {
            if (err) throw err;
        });
    },

    findByGender(req,res) {
        User.findOne({
            where: {
                id: req.params.id
            }
        }).then(result1 => {
            if(result1.findMan && result1.findWoman){
                User.findAll({
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== result1.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            } else if (result1.findMan){
                User.findAll({
                    where: {
                        sex: false
                    }
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== result1.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            } else {
                User.findAll({
                    where: {
                        sex: true
                    }
                }).then(result2 => {
                    let noSelf = result2.filter(user => user.id !== result1.id);
                    let final = [];
                    noSelf.forEach(match => {
                        if ((match.findMan && !result1.sex) || (match.findWoman && result1.sex)){
                            final.push(match);
                        }
                    });
                    res.json(final);
                }).catch(err => {
                    if (err) throw err;
                });
            }
        }).catch(err => {
            if (err) throw err;
        });
    },

    createUser(req,res) {
        console.log(req.body);
        User.create({
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo,
            sex: req.body.sex,
            age: req.body.age,
            description: req.body.description,
            findMan: req.body.findMan,
            findWoman: req.body.findWoman
        }).then(result => {
            console.log(result);
            res.end();
        }).catch(err => {
            if (err) throw err;
        });
    },

    updateUser(req,res) {
        console.log(req.body);
        User.update({
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo,
            sex: req.body.sex,
            age: req.body.age,
            description: req.body.description,
            findMan: req.body.findMan,
            findWoman: req.body.findWoman
        },{
            where: {
                id: req.params.id
            }
        }).then(result => {
            console.log(result);
            res.end();
        }).catch(err => {
            if (err) throw err;
        });
    }


}
