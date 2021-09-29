import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks , setTasks ] =  useState([
    {
        id : 1 ,
        text : 'Appointment' ,
        day : 'Sep 24 at 12:00 PM' ,
        reminder : true ,

    },
    {
        id : 2 ,
        text : 'Work' ,
        day : 'Sep 24 at 4:00 PM' ,
        reminder : true ,

    },
    {
        id : 3 ,
        text : 'Restaurant' ,
        day : 'Sep 24 at 8:00 PM' ,
        reminder : false ,

    }
  ]);
const addtasks = (task) => {
  console.log( 'Task added',task)
  const id = Math.floor(Math.random() * 10000)+ 1
  console.log(id)
  const newTask = {id , ...task}
  setTasks([...tasks , newTask])
}

const deleteTask = (id) => {
  console.log('delete' ,id)
  setTasks(tasks.filter((tasks)=>tasks.id !== id))
}

const Togglereminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) =>task.id === id ? {...task , reminder : !task.reminder }:task))
}

return(
    <div className='container'>
     <Header onAdd = {() => setShowAddTask (!showAddTask)} showAdd = {showAddTask}/>
     {showAddTask && <AddTask onAdd = {addtasks}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {Togglereminder}/>  : 'No tasks assigned'} 
     </div>
  )
}

export default App;
