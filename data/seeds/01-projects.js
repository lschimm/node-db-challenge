exports.seed = function(knex) {
  return knex("projects")
    .del()
    .then(function() {
      return knex("table_name").insert([
        { projectName: "1" },
        { projectDescription: "describin" },
        { projectStatus: "false" },
        { projectName: "2" },
        { projectDescription: "describin" },
        { projectStatus: "false" },
        { projectName: "3" },
        { projectDescription: "the odd one out" },
        { projectStatus: "true" },
        { projectName: "4" },
        { projectDescription: "describin" },
        { projectStatus: "false" }
      ]);
    });
};
