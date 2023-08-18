const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You have reached the api router");
});

router.use("/trains", require("./trains"));
router.use("/conductors", require("./conductors"));

module.exports = router;
