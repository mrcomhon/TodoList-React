import { useTasks } from '../../contexts/TaskContext';
import { Task } from '../Storage/Storage';

export function TaskItem({ task }: { task: Task }) {
    const { toggleTask, removeTask } = useTasks()
    
    return (
        <>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id!)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => removeTask(task.id!)}>Удалить задачу</button>
        </>
    )
}