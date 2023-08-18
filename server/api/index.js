const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("You have reached the api router");
});

router.use("/trains", require("./trains"));

module.exports = router;
