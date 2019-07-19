const db = require("../data/db-config.js");

//need to be able to:
// POST to projects,
// POST to actions,
// GET retreive actions by its 'id' // double get?

module.exports = {
  getProject,
  getProjectById,
  //   getActions,
  //   getActionsById,
  addProject,
  addActions
};

// needs testing

function getProject() {
  return db("projects");
}

//project-id changed to projectId
// the dash - doesn't work :C

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first()
    .then(pro => {
      if (pro) {
        //the double get goes here I think. Just repeat above?
        return db("actions")
          .where({ projectId: id })
          .select("id", "actionDescription", "actionNotes", "actionStatus")
          .then(act => {
            return { ...project, act };
          });
      } else {
        return null;
      }
    });
}

// TEST THIS ^ I don't know what's going on. lol

function addActions(act) {
  return db("actions")
    .insert(act)
    .then(id => ({ id }))
    .catch(err => {
      res.status(500).json(err);
    });
}

function addProject(pro) {
  return db("projects")
    .insert(pro)
    .then(id => ({ id }))
    .catch(err => {
      res.status(500).json(err);
    });
}

//might not need these functions
function addActionById() {}
function addProjectById() {}
