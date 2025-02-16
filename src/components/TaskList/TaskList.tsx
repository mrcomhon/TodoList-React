import React, { useState } from 'react';
import { useTasks } from '../../contexts/TaskContext'
import { TaskItem } from './TaskItem';

export function TaskList() {
    const { tasks, addTask } = useTasks()
    const [inputValue, setInputValue] = useState('')

    const handleAdd = () => {
        if (inputValue.trim()) {
            addTask(inputValue.trim())
            setInputValue('')
        }
    }

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Введите задачу'
            />
            <button onClick={handleAdd}>Добавить</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} />
                    </li>
                ))}
            </ul>
        </>
    )
}