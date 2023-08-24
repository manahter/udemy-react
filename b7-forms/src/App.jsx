import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    // Yeni gelen elemanı, listeye ekliyoruz.
    setTasks([
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }]);
  }

  const deleteTaskById = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );
  }
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {id, title: updatedTitle, taskDesc: updatedTaskDesc};
        }
        return task;
      })
    );
  }
  

  return (
    <div className='app'>
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  )
}

export default App
