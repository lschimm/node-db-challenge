const express = require("express");

//importing the functions from v
const projects = require("./projects-model.js");

const router = express.Router();

//GET by id , POST projects, POST actions

// not needed? but just to GET something v
router.get("/", async (req, res) => {
  try {
    const pro = await projects.getProject();
    res.status(200).json(pro);
  } catch (err) {
    res.status(500).json({ message: "cannot GET actions" });
  }
});

//working!

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pro = await projects.getProjectById(id);
    // same as old way-- if statement:
    if (pro) {
      res.status(200).json(pro);
    } else {
      res.status(404).json({ message: "nooo 404. nothing at that id" });
    }
  } catch (err) {
    res.status(500).json({ message: "code is messed up somewhere. boo" });
  }
});
// works!

router.get("/:id/actions", async (req, res) => {
  const { id } = req.params;
  const actions = await projects.getActionsByProjectId(id);
  try {
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json(err);
  }
});
//works

router.post("/:id/actions", async (req, res) => {
  const { id } = req.params;
  const action = req.body;
  try {
    const project = await projects.getProjectById(id);
    if (project) {
      const thisAction = await projects.addAction(action);
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "id does not exist" });
    }
    // const actions = await projects.addAction(project);
    // res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ message: "error posting it :(" });
  }
});
//not working. D:

router.post("/", async (req, res) => {
  const pro = req.body;
  if (Object.keys(pro).length === 0) {
    res.status(400).json({
      message: "needs the rest of the info"
    });
  } else {
    try {
      const project1 = await projects.addProject(pro);
      res.status(200).json(project1);
    } catch (err) {
      res.status(500).json({ message: "couldn't make it" });
    }
  }
});
//works!

module.exports = router;
