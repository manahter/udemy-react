import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react'


const TasksContext = createContext();

function Provider({ children }) {
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

    const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTasks,
        editTaskById,
        deleteTaskById,
    }

    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext;