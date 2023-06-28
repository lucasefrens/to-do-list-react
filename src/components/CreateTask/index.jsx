import { useState } from 'react';
import './styles.css';

const CreateTask = ({ listTodo, setListTodo }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleCreateTask = (e) => {
        e.preventDefault();
        if (!title || !category) return;

        const todo = {
            id: listTodo.length > 0 ? listTodo[listTodo.length - 1].id + 1 : 1,
            title,
            category,
            isCompleted: false
        }

        const postTask = async () => {
            await fetch("http://localhost:5000/todos", {
                method: "POST",
                body: JSON.stringify(todo),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            setListTodo((prevState) => [...prevState, todo]);
        }

        postTask();
        setTitle("");
        setCategory("");
    }

    return (
        <div className="create-task">
            <h2>Criar Tarefa</h2>
            <form>
                <input 
                    type="text" 
                    name="" 
                    placeholder="Digite uma nova tarefa aqui" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                />
                <select 
                    onChange={(e) => setCategory(e.target.value)} 
                    value={category}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit" onClick={handleCreateTask}>Criar Tarefa</button>
            </form>
        </div>
    );
}

export default CreateTask;