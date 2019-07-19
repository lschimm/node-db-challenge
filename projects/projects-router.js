const express = require("express");

//importing the functions from v
const projects = require("./projects-model.js");

const router = express.Router();

router.use(express.json());

//GET by id , POST projects, POST actions

// not needed? but just to GET something v
router.get("/", async (req, res) => {
  try {
    const pro = await projects.getProjectsById();
    res.status(200).json(pro);
  } catch (err) {
    res.status(500).json({ message: "cannot GET actions" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pro = await projects.getProjectById(id);
    // same as old way if statement:
    if (pro) {
      res.status(200).json(pro);
    } else {
      res.status(404).json({ message: "nooo 404. nothing at that id" });
    }
  } catch (err) {
    res.status(500).json({ message: "code is messed up somewhere. boo" });
  }
});

router.get("/:id/actions");

module.exports = router;
