import { openDB } from 'idb';

const dbPromise = openDB('task-db', 1, {
    upgrade(db) {
        db.createObjectStore('tasks', {keyPath: 'id', autoIncrement: true})
    }
})

export const taskStorage = {
    async getAll() {
        return (await dbPromise).getAll('tasks')
    },
    async add(task:object) {
        return (await dbPromise).add('tasks', task)
    }
}