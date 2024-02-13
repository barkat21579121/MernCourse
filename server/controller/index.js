const Home = (req, res) => {
  res.send("we are on home page ");
};
const register = (req, res) => {
  console.log({ message: req.body });
  res.send({ message: req.body });
};

module.exports = { Home, register };
