import { useEffect, useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import Title from './components/Title';
import Test from './components/test'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };
  //   fetchTasks();
  // }, [])

  function onTaskClick(id) {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    })
    setTasks(newTasks);
  }

  function onDeleteTaskClick(id) {
    const deleteTask = tasks.filter(t => t.id !== id)

    setTasks(deleteTask)
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <Title>
          Lista de Tarefas
        </Title>
        <AddTasks onAddTaskClick={onAddTaskClick} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
