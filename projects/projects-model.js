const db = require("../data/db-config.js");

//need to be able to:
// POST to projects,
// POST to actions,
// GET retreive actions by its 'id' // double get?

module.exports = {
  getProject, //works
  addProject, //works
  addAction, //works
  getProjectById, //works on the solo return; not double get return to bring in the actions connecting via projectId: id
  getActionsByProjectId //trying D:
};

function getProject() {
  return db("projects");
}

//works

function addProject(pro) {
  return db("projects")
    .insert(pro)
    .then(id => ({ id }))
    .catch(err => {
      res.status(500).json(err);
    });
}

function addAction(act) {
  return db("actions")
    .insert(act)
    .then(id => ({ id }))
    .catch(err => {
      res.status(500).json(err);
    });
}

//project-id changed to projectId
// the dash - doesn't work :C

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first()
    .then(projects => {
      if (projects) {
        return (
          db("actions")
            .where({ projectId: id })
            //   .select("actionName")
            .then(actions => {
              return { ...projects, actions };
            })
        );
        // return projects;
      } else {
        return null;
      } // else {
      //return something working? please?
      //}
    });
}

function getActionsByProjectId(id) {
  return db("actions").where({ projectId: id });
}
//this should be okay
