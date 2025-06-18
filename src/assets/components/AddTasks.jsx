import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log({ title, description });

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-lg shadow flex flex-col">
      <input
        rounded-lg
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="rounded-lg border-slate-300 outline-state-400 px4 py2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        rounded-lg
        type="text"
        placeholder="Digite a descricao da tarefa"
        className="rounded-lg border-slate-300 outline-state-400 px4 py2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          //verificar se o titulo e a descricao estao vazios

          if (!title.trim || !description.trim()) {
            return alert("Preencha todos os campos!!");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 text-white p-2 rounded-md"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTasks;
