const Course = require("../models/Course");

class SiteController {

  index = async (req, res) => {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ error: 'ERROR' });
    }
  };
  

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
