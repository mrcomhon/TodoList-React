import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import { taskStorage } from './components/Storage/Storage';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState<number>(0)

  
      async function testDB() {
        await taskStorage.add({ text: "My first task"});

        const tasks = await taskStorage.getAll();
        console.log("All tasks:", tasks);
      }
      
  useEffect(() => {
    testDB()
  }, [])
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button></Button>
      </div>

    </>
  )
}

export default App
