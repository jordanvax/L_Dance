const Joi = require("joi");

const evenementsSchema = Joi.object({
  id: Joi.number().min(1).optional(),
  name: Joi.string().min(2).max(500).required(),
  lieu: Joi.string().max(1000).required(),
  description: Joi.string().max(1000).required(),
  horaire_debut: Joi.number().min(1).required(),
  horaire_fin: Joi.number().min(1).required(),
  id_Professeurs: Joi.number().min(1),
  photo: Joi.string().max(1000).required(),
  desc_photo: Joi.string().max(1000).required(),
});

const validateEvenements = (req, res, next) => {
  const evenements = JSON.parse(req.body.data);
  const { error } = evenementsSchema.validate(evenements, {
    abortEarly: false,
  });
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    req.video = evenements;
    next();
  }
};

module.exports = {
  validateEvenements,
};
