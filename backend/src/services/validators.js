const Joi = require("joi");

const evenementsSchema = Joi.object({
  id: Joi.number().min(1).optional(),
  name: Joi.string().min(2).max(500).required(),
  lieu: Joi.string().max(1000).required(),
  description: Joi.string().max(1000).required(),
  horaire_debut: Joi.string().min(10).max(30).required(),
  horaire_fin: Joi.string().min(10).max(30).required(),
  id_Professeurs: Joi.number().min(1),
  photo: Joi.string().max(1000).required(),
  desc_photo: Joi.string().max(1000).required(),
});

const validateEvenements = (req, res, next) => {
  const { error } = evenementsSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    req.evenements = req.body;
    next();
  }
};

module.exports = {
  validateEvenements,
};
