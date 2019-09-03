
exports.up = function(knex) {
  return knex.schema.createTable('todos', tbl => {
      tbl.increments();

      tbl.string('todo', 30).notNullable
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos')
};
