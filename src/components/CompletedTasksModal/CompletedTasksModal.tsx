import { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";

export function CompletedTasksModal() {
    const [isOpen, setIsOpen] = useState(false)
    const context = useTasks()
    
    const completedTasks = context?.tasks.filter((t) => t.completed)

    const handleClick = () => {
     setIsOpen(!isOpen)
    }

    return (
      <div>
        <button onClick={handleClick}>
         {isOpen ? 'Закрыть' : 'Показать завершенные задачи'}
        </button>
        {isOpen && (
          <div className="modal-backdrop">
            <div className="modal">
              <h2>Завершенные задачи</h2>
              {completedTasks?.length === 0 ? (
                <p>Нет завершенных задач</p>
              ) : (
                <ul>
                  {completedTasks?.map((task) => (
                    <li key={task.id}>{task.text}</li>
                  ))}
                </ul>
              )}
              
            </div>
          </div>
        )}
      </div>
    );
}