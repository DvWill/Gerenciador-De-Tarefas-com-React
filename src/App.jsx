import AddTasks from "./assets/components/AddTasks";
import Tasks from "./assets/components/Tasks";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Estudar Programacao",
            description: "breve descricao",
            isCompleted: false,
        },
        {
            id: 2,
            title: "Estudar ingles",
            description: "breve descricao",
            isCompleted: false,
        },
        {
            id: 3,
            title: "Estudar Matematica",
            description: "breve descricao",
            isCompleted: false,
        },
    ]);

    function atualizarEstado(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }

            return task;
        });
        setTasks(newTasks);
    }

    function excluirTask(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);

        setTasks(newTasks);
    }

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };

        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500ox] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas
                </h1>
                <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={atualizarEstado}
                    onTaskDelete={excluirTask}
                />
            </div>
        </div>
    );
}

export default App;
