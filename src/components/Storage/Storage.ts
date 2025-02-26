import { openDB } from "idb";

export interface Task {
  id?: number;
  text: string;
  completed: boolean;
}

const dbPromise = openDB("task-db", 1, {
  upgrade(db) {
    db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
  },
});

export const taskStorage = {
  async getAll(): Promise<Task[]> {
    const db = await dbPromise;
    const all = await db.getAll('tasks')
    return all as Task[]
  },
  async add(task: Task): Promise<number> {
      const db = await dbPromise;
      const key = await db.add("tasks", task);
      return key as number;
  },
  async put(task: Task) {
   const db = await dbPromise;
   return db.put('tasks', task)
  },
  async delete(id: number) {
  const db = await dbPromise;
  return db.delete("tasks", id);
  },
};
