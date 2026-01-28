const { body, validationResult } = require("express-validator");

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address"),
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must be exactly 10 digits"),
  body("gender")
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female"])
    .withMessage("Gender must be either Male or Female"),
  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either Active or Inactive"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  validateUser,
  handleValidationErrors,
};
