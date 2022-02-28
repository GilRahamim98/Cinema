const express = require("express");
const Axios = require("axios");

const router = express.Router();

// Get All
router.get("/", async (req, res) => {
  try {
    const response = await Axios.get("http://localhost:9000/api/members");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

// Get By ID
router.get("/:id", async (req, res) => {
  try {
    const response = await Axios.get(
      `http://localhost:9000/api/members/${req.params.id}`
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

//Create Member
router.post("/", async (req, res) => {
  try {
    const response = await Axios.post(
      "http://localhost:9000/api/members",
      req.body
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

//Update Member
router.put("/:id", async (req, res) => {
  try {
    const response = await Axios.put(
      `http://localhost:9000/api/members/${req.params.id}`,
      req.body
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

//Delete Member
router.delete("/:id", async (req, res) => {
  try {
    const response = await Axios.delete(
      `http://localhost:9000/api/members/${req.params.id}`
    );
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
