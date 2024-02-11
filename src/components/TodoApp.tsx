import {useState}  from 'react'
import { TaskList } from './TaskList'



export const TodoApp = () => {

    const [newTask, setNewTask]= useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = ()=>{


      if (newTask.trim()=== '') return
      setTaskList(lastTask => [...lastTask, newTask])
      setNewTask('')
    }

    const handeDeleteTask =(index:number)=>{
          setTaskList( task => task.filter((_,i) => i!== index ))
    }

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <input 
            type="text"
            value={newTask}
            onChange={(e)=> setNewTask(e.target.value)}
            placeholder="Nueva tarea" />
            <button onClick={handleAddTask}>Add New Task</button>
        </div>
      <TaskList taskList={taskList} deteleTask={handeDeleteTask} ></TaskList>
    </div>
  )
}
