import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import { TaskList } from './components/TaskList/TaskList';
import { TaskItem } from './components/TaskList/TaskItem';
import { CompletedTasksModal } from './components/CompletedTasksModal/CompletedTasksModal';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <ThemeSwitcher />
        <h1>Todo List</h1>
        <TaskList/>
          <TaskItem/>
        
        <CompletedTasksModal/>
      </div>
    </TaskProvider>
  )
}

export default App
