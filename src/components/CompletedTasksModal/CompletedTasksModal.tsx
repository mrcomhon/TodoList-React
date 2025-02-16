import React, { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";

export function CompletedTasksModal() {
    const [isOpen, setIsOpen] = useState(false)
    const { tasks } = useTasks()
    
    const completedTasks = tasks.filter((t) => t.completed)

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Показать завершенные задачи</button>
            {isOpen && (
                <div className='modal-backdrop'>
                    <div className='modal'>
                        <h2>Завершенные задачи</h2>
                        {completedTasks.length === 0 ? (
                            <p>Нет завершенных задач</p>
                        ) : (
                        <ul>
                            {completedTasks.map((task) => (
                                <li key={task.id}>{task.text}</li>
                            ))}
                        </ul>
                        )}
                        <button onClick={() => setIsOpen(false)}>Закрыть</button>
                    </div>
                </div>
            )
                
        }
        </div>
    )
}