var router = require("express").Router();
var db = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    console.log(db);
    res.json(db);
});

router.post("/api/notes", (req, res) => {
    // console.log('Route Hit');
    // console.log(req.body)
    db.push(req.body);
    console.log(db);
});
// router.delete("/api/notes", (req, res) => {
//     // console.log(req);
// });

module.exports = router;
