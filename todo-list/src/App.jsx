import { useState } from 'react'


function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")


  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newTodoList = [...todoList, newTask]
    setTodoList(newTodoList)
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName
    })

    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      <div className="addTask">
        <input type="text" placeholder="Add Your Task" className="border-2 border-black text-center" onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {todoList.map((task) => {
          return <div className = "max-w-[150px] border-3 border-black bg-black text-white px-3 py-6 m-5 flex justify-between items-center">
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
