
import Header from './component/Header'
import './index.css'
import { useState,useEffect } from 'react'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
  ])
  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }
    fetchTask()
  }, [])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"
      }
      </div>
  )
}


