import { useState } from "react";
import { useTasks } from '../../contexts/TaskContext';
import { Task } from '../Storage/Storage';
import './TaskList.scss'

export function TaskList() {
  const { tasks, addTask } = useTasks();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        style={{ marginRight: 10 }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul>
        {tasks.map((task) => (
          <li className='list' key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// В этом же файле или отдельно:
function TaskItem({ task }: { task: Task }) {
  const { toggleTask, removeTask } = useTasks();

  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id!)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.objective}
      </span>
      <button onClick={() => removeTask(task.id!)}>Удалить</button>
    </>
  );
}
