const router = require("express").Router();
const userdb = require("./../controllers/users");
const likeddb = require("./../controllers/liked");
const matchesdb = require("./../controllers/matches");

router.get("/users/:id", userdb.findUser);

router.get("/users/if/:id", userdb.ifExists);

router.get("/users/genderfind/:id", userdb.findByGender);

router.post("/users/create", userdb.createUser);

router.put("/users/:id", userdb.updateUser);

router.post("/liked/create", likeddb.makeLike);

router.post("/matches/create", matchesdb.makeMatch);

router.get("/matches/find", matchesdb.findMatch);

router.put("/matches/update", matchesdb.updateMatch);

router.delete("/matches/delete", matchesdb.destroyMatch);

module.exports = router;