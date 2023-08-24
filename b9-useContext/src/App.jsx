import { useEffect, useContext } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import TasksContext from './context/task'

// Verileri kaydedebilmek için,
// json-server
// kullandık. -> https://www.npmjs.com/package/json-server

function App() {

  // TasksContext'in içinden fetchTasks metodunu al
  const {fetchTasks} = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='app'>
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  )
}

export default App
