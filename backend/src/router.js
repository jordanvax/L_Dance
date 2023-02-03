const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const evenementControllers = require("./controllers/evenementsControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/evenements", evenementControllers.browse);
router.get("/evenements/:id", evenementControllers.read);
router.put("/evenements/:id", evenementControllers.edit);
router.post("/evenements", evenementControllers.add);
router.delete("/evenements/:id", evenementControllers.destroy);

module.exports = router;
