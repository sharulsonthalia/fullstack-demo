const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("You have reached the api router");
});

//Returns all the trains
router.get("/trains", async (req, res) => {
  const trains = await prisma.train.findMany();
  res.send(trains);
});

//Return on train with specified id
router.get("/trains/:id", async (req, res) => {
  try {
    const train = await prisma.train.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!train) {
      res.send({ error: true, message: "Train Not Found" });
    } else {
      res.send(train);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

module.exports = router;
