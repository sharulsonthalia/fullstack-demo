const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.send("You have reached the auth router");
});

//REGISTERS A USER
router.post("/register", async (req, res) => {
  try {
    const user = req.body;

    user.password = await bcrypt.hash(user.password, 10);

    const result = await prisma.user.create({
      data: user,
    });

    if (result) {
      //TODO return jwt token
      res.send(result);
    } else {
      res.send({ message: "Could not add User" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

//Checks if user is valid
router.post("/signIn", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password); //<===Will return true if password is correct
    if (passwordMatch) {
      //TODO return jwt token
      res.send(user);
    } else {
      res.send({ message: "Invalid Login" });
    }
  } else {
    res.send({ message: "Invalid Login" });
  }
});

module.exports = router;
