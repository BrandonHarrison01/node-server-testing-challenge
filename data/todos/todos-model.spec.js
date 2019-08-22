const db = require('../db-config')

const Todos = require('./todos-model')

describe('todos model', () => {
    beforeEach(async () => {
        await db('todos').truncate();
    })
    describe('insert()', () => {
        it('add a new todo', async () => {
            await Todos.insert({ todo: 'stuff' })
            await Todos.insert({ todo: 'things' })

            const todos = await db('todos')
            
            expect(todos).toHaveLength(2)
        })
        it('should return json', async () => {
            const todos = await db('todos')

            expect(todos).toEqual([])
        })
    })
})