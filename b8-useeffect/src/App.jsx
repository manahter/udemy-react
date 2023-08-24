import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

// Verileri kaydedebilmek için,
// json-server
// kullandık. -> https://www.npmjs.com/package/json-server

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = async (title, taskDesc) => {
    // json server'a kayıt yapıyoruz
    const response = await axios.post('http://localhost:3000/tasks', {
      title,
      taskDesc,
    })

    // Yeni gelen elemanı, listeye ekliyoruz.
    setTasks([
      ...tasks,
      response.data,
    ]);
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, { 
      title: updatedTitle, 
      taskDesc: updatedTaskDesc
    });

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
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
