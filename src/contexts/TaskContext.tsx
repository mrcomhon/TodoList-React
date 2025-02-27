import React, { createContext, useContext, useEffect, useState } from "react";
import { taskStorage, Task } from "../components/Storage/Storage";

interface TaskContextProps {
  tasks: Task[];
  addTask: (text: string) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
}

const TaskContext = createContext<TaskContextProps | null>(null);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const allTasks = await taskStorage.getAll();
      setTasks(allTasks);
    })();
  }, []);

  const addTask = async (text: string) => {
    const newTask: Task = { text, completed: false };
    const newId = await taskStorage.add(newTask);
    setTasks([...tasks, { ...newTask, id: newId }]);
  };

  const toggleTask = async (id: number) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        const newCompleted = !t.completed;
        return { ...t, completed: newCompleted };
      }
      return t;
    });
    setTasks(updated);

    const taskToUpdate = updated.find((t) => t.id === id);
    if (taskToUpdate) {
      await taskStorage.put(taskToUpdate);
    }
  };

  const removeTask = async (id: number) => {
    await taskStorage.delete(id);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

