const validate = (schema) => async (req, res, next) => {
  try {
    const parseValidate = await schema.parseAsync(req.body);
    req.body = parseValidate;
    next();
  } catch (err) {
    res.status(400).send({ message: err.issues[0].message });
  }
};
module.exports = validate;
