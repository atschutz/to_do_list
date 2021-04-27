import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Fight someone',
        day: 'Tuesday',
        reminder: true
    },
    {
        id: 2,
        text: 'Buy puppy',
        day: 'Wednesday',
        reminder: true
    },
    {
        id: 3,
        text: 'Nail React interview',
        day: 'Saturday',
        reminder: false
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task)) 
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
