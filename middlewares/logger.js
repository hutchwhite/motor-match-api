module.exports = function (req, res, next) {
  console.info(req.method, req.originalUrl)
  next()
}
