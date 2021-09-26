import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks , setTasks ] =  useState([
    {
        id : 1 ,
        text : 'Appointment' ,
        day : 'Sep 24 at 12:00 PM' ,
        Reminder : true ,

    },
    {
        id : 2 ,
        text : 'Work' ,
        day : 'Sep 24 at 4:00 PM' ,
        Reminder : true ,

    },
    {
        id : 3 ,
        text : 'Restaurant' ,
        day : 'Sep 24 at 8:00 PM' ,
        Reminder : false ,

    }
  ]);

const deleteTask = (id) => {
  console.log('delete' ,id)
  setTasks(tasks.filter((tasks)=>tasks.id !== id))
}
return(
    <div className='container'>
     <Header />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask}/>  : 'No tasks'} 
    </div>
  )
}

export default App;
