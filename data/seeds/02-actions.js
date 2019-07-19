exports.seed = function(knex) {
  return knex("actions")
    .del()
    .then(function() {
      return knex("actions").insert([
        {
          projectId: 1,
          actionDescription: "1",
          actionNotes: "asdf",
          actionStatus: 11
        },
        {
          projectId: 2,
          action_description: "2",
          actionNotes: "jkl;",
          actionStatus: 11
        }
      ]);
    });
};
