import { useState } from "react"
import Input from "./input";
import Button from "./Button";

export default function AddTasks({ onAddTaskClick }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 shadow rounded-md flex flex-col">
            <Input
                type="text"
                placeholder="Digite o titulo da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Digite a descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Adicionar parametros.")
                    }
                    onAddTaskClick(title, description)
                    setTitle("")
                    setDescription("")
                }}
            >
                Adicionar
            </Button>
        </div>
    )
}