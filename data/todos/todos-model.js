const db = require('../db-config')

module.exports = {
    insert
}

async function insert(hobbit) {
    return db('todos').insert(hobbit);
  }
  