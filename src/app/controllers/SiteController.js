const Course = require("../models/Course");

class SiteController {

  index(req, res) {
    Course.find({})
      .then(courses => {
        res.json(courses);
      })
      .catch(err => {
        res.status(400).json({ error: 'ERROR' });
      });
  }
  
  

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
