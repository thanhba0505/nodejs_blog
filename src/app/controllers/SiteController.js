const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {

  index(req, res, next) {

    // promises
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next);
  }
  
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
