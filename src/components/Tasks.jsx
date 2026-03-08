import { ChevronRightIcon, TrashIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("id", task.id)
        navigate(`/task?${query}`)
    }
    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            onClick={() => onTaskClick(task.id)}
                            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
                        >
                            {task.title}
                        </button>
                        <button
                            onClick={() => onSeeDetailsClick(task)}
                            className="bg-slate-400 p-2 text-white rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button
                            onClick={() => onDeleteTaskClick(task.id)}
                            className="bg-slate-400 p-2 text-white rounded-md">
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Tasks;