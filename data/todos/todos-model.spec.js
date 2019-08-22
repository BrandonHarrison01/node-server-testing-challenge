const db = require('../db-config')

const Todos = require('./todos-model')

describe('todos model', () => {
    describe('insert()', () => {
        it('add a new todo', async () => {
            await Todos.insert({ todo: 'stuff' })
            await Todos.insert({ todo: 'things' })

            const todos = await db('todos')

            expect(todos).toHaveLength(2)
        })
    })
})