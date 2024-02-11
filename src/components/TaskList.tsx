import { Task } from "./Task"

type Props = {
    taskList: string[]
    deteleTask: (index:number) => void
}

export const TaskList = ({taskList, deteleTask }: Props) => {
  return (
    <div className="taskList">
           {taskList.map((task,index)=> (
              <Task 
              key={index}
              task={task}
              deleteTask={()=>deteleTask(index)}
              ></Task>
           ))}
    </div>
  )
}