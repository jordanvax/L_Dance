const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const evenementControllers = require("./controllers/evenementsControllers");
const professeurControllers = require("./controllers/professeursController");

const validators = require("./services/validators");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/evenements", evenementControllers.browse);
router.get("/evenements/:id", evenementControllers.read);
router.put(
  "/evenements/:id",
  validators.validateEvenements,
  evenementControllers.edit
);
router.post(
  "/evenements",
  validators.validateEvenements,
  evenementControllers.add
);
router.delete("/evenements/:id", evenementControllers.destroy);

router.get("/professeurs", professeurControllers.browse);
router.get("/professeurs/:id", professeurControllers.read);
router.put("/professeurs/:id", professeurControllers.edit);
router.post("/professeurs", professeurControllers.add);
router.delete("/professeurs/:id", professeurControllers.destroy);

module.exports = router;
