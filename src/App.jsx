import { useEffect, useState } from 'react'
import './App.css'

import SearchField from './components/SearchField'
import FilterField from './components/FilterField'
import TodoList from './components/TodoList'
import CreateTask from './components/CreateTask'

function App() {

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All")

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch("http://localhost:5000/todos");
        const data = await response.json();

        setTodo(data);
        setLoading(false);
      } catch (err){
        console.log("Erro ao carregar as tarefas" + err);
        setLoading(false);
      }
    };

    fetchTodo();
  }, []);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <SearchField search={search} setSearch={setSearch}/>
      <FilterField filter={filter} setFilter={setFilter} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <TodoList todos={todo} setTodos={setTodo} search={search} filter={filter} filterCategory={filterCategory}/>
      )}
      <CreateTask listTodo={todo} setListTodo={setTodo} />
    </div>
  )
}

export default App
