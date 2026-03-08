import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button"
import Title from "../components/Title"

export default function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")

    return (
        <div className='w-screen h-screen bg-slate-500 p-6'>
            <div className='w-[500px] space-y-4 mx-auto'>
                <div className="flex justify-center relative mb-6">
                    <Button
                        className="absolute left-0 top-0 bottom-0 text-slate-100"
                        onClick={() => navigate(-1)}>
                        <ChevronLeftIcon />
                    </Button>
                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-700">
                        {id}
                    </h2>
                    <p className="text-slate-700">

                    </p>
                </div>
            </div>
        </div>
    )
}