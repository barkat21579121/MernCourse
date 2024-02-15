const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "please check your data somthing is wrong ";
  const extraDetails = err.extraDetails || "your provided details are invalid ";
  res.status(status).json({ message, extraDetails });
};
module.exports = errorHandler;
