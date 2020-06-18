
var db = require("../db/db.json");

const fakeDB = [];
// JSON.pars and JSON.stringfy
module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    console.log(fakeDB);
    res.json(fakeDB);
  });

  app.post("/api/notes", function(req, res) {

    fakeDB.push(req.body);
    res.json(req.body);
  })

  app.delete("/api/notes/:id", function(req, res) {
  // filter method
    res.json({ ok: true });
  });
};
