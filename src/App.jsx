import AddTasks from "./assets/components/AddTasks";
import Tasks from "./assets/components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([{
        id: 1,
        title: "Estudar Programacao",
        description: "breve descricao",
        isCompleted: false

    },  {
        id: 2,
        title: "Estudar ingles",
        description: "breve descricao",
        isCompleted: false
    }, {
        id: 3,
        title: "Estudar Matematica",
        description: "breve descricao",
        isCompleted: false
    },
    ]);

    function atualizarEstado(taskId) {
        const newTasks= tasks.map((task) =>{

            if(task.id === taskId) {
                return {...task, isCompleted: !task.isCompleted};
            }

            return task;
        });
        setTasks(newTasks);
    }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className= "w-[500ox]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
          <AddTasks/>
          <Tasks tasks={tasks} onTaskClick={atualizarEstado} />
      </div>
    </div>
  );
}

export default App;
