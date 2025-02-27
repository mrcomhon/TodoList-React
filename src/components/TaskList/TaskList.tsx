import { useState } from "react";
import { useTasks } from '../../contexts/TaskContext';
import { Task } from '../Storage/Storage';
import './TaskList.scss'

export function TaskList() {
  const context = useTasks();
  const [inputValue, setInputValue] = useState('');
  

  const handleAdd = () => {
    if (inputValue.trim()) {
      context?.addTask(inputValue.trim());
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
        {context?.tasks.map((task) => (
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
  const context = useTasks();

  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => context?.toggleTask(task.id!)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => context?.removeTask(task.id!)}>Удалить</button>
    </>
  );
}
