exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      //needs name, description, status
      tbl
        .string("projectName")
        .notNullable()
        .unique();
      tbl.string("projectDescription").notNullable();
      tbl.boolean("projectStatus").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();
      // needs unique id, description, notes, status
      //hook it up via the project id
      tbl
        .integer("projectId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string("actionDescription");
      tbl.string("actionNotes");
      tbl.boolean("actionStatus");
    });
};

exports.down = function(knex) {};
