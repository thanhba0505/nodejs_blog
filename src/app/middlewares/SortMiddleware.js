module.exports = function sortMiddleware(req, res, next) {

  res.locals._sort = {
    enabler: false,
    type: 'default'
  }

  if (req.query.hasOwnProperty('_sort')) {
    // Object.assign(req.locals._sort, {
    //   enabler: true,
    //   type: req.query.type,
    //   column: req.query.column
    // })

    res.locals._sort.enabler = true
    res.locals._sort.type = req.query.type
    res.locals._sort.column = req.query.column
  }

  next();
}