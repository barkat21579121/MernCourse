const z = require("zod");

const schemaValidator = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "name must be atleast 3 characters" })
    .max(10, { message: "name length is must be under 10 characters " }),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .min(10, { message: "phone must be atleast 10 characters" })
    .max(20, { message: "phone length is must be under 20 characters " }),
  password: z
    .string()
    .trim()
    .min(7, { message: "password must be atleast 3 characters" })
    .max(255, { message: "password length is must be under 255 characters " }),
});

module.exports = schemaValidator;
