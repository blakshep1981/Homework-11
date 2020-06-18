
var db = require("../db/db.json");

const fakeDB = [];

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    console.log(db);
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {

    db.push(req.body);
    res.json(req.body);
  })

  app.delete("/api/notes/:id", function(req, res) {
  
    res.json({ ok: true });
  });
};
