const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Returns all the stations
router.get("/", async (req, res) => {
  //TODO
});

//Returns a station with specified id
router.get("/:id", async (req, res) => {
  //TODO
});

//Creates a new station
router.post("/", async (req, res) => {
  //TODO
});

//Updates the station with specified id
router.put("/:id", async (req, res) => {
  //TODO
});

//Deletes a station
router.delete("/:id", async (req, res) => {
  //TODO
});

module.exports = router;
