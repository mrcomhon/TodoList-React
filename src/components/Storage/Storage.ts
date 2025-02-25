import { openDB } from "idb";

export interface Task {
  id?: number;
  objective: object;
  completed: boolean;
}

const dbPromise = openDB("task-db", 1, {
  upgrade(db) {
    db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
  },
});

export const taskStorage = {
  async getAll(): Promise<Task[]> {
    return (await dbPromise).getAll("tasks");
  },
  async add(task: Task) {
    return (await dbPromise).add("tasks", task);
  },
  async put(task: Task) {
    return (await dbPromise).put("tasks", task);
  },
  async delete(id: number) {
    return (await dbPromise).delete("tasks", id);
  },
};
