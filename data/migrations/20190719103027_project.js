exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      //needs name, description, status
      tbl.string("project-name").notNullable();
      tbl.string("project-description").notNullable();
      tbl.boolean("project-status").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();
      // needs unique id, description, notes, status
      tbl
        .integer("project-id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string("action-description").notNullable();
      tbl.string("action-notes").nullable(); /// nullable a thing? double check this
      tbl.boolean("action-status").notNullable();
    });
};

exports.down = function(knex) {};
