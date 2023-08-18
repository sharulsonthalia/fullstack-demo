const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You have reached the api router");
});

router.use("/trains", require("./trains"));
router.use("/conductors", require("./conductors"));
router.use("/staions", require("./stations"));

module.exports = router;
