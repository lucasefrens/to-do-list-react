import './styles.css'

const TodoList = ({ todos, setTodos, search, filter, filterCategory }) => {
    
    const filterByCompletion = (todo) => {
      return filter === "All"
        ? true
        : filter === "Complete"
        ? todo.isCompleted
        : !todo.isCompleted
    };
    
    const filterByCategory = (todo) => {
      if (filterCategory === "All") {
        return true;
      } else {
        return todo.category === filterCategory;
      }
    };
    

    const handleRemove = (id) => {
        const deleteTask = async () => {
            try {
                await fetch(`http://localhost:5000/todos/${id}`, {
                    method: "DELETE",
                });

                const newTodo = todos.filter((todo) => id !== todo.id);
                setTodos(newTodo);
            } catch (err) {
                console.log("Algo deu errado: " + err);
            }
        }
        deleteTask();
    }

    const handleComplete = (todo) => {
        const updatedTodo = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      
        const updateTask = async () => {
          try {
            await fetch(`http://localhost:5000/todos/${todo.id}`, {
              method: "PUT",
              body: JSON.stringify(updatedTodo),
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            setTodos((prevState) =>
              prevState.map((task) => (task.id === todo.id ? updatedTodo : task))
            );
          } catch (err) {
            console.log("Algo deu errado" + err);
          }
        };
      
        updateTask();
      };
      

    return (
        <div className="todo-list">
            <div className="container">
              {todos
                .filter(filterByCategory)
                .filter(filterByCompletion)
                .filter((todo) =>
                  todo.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((todo) => (
                  <div className={todo.isCompleted ? "todo complete" : "todo"} key={todo.id}>
                      <div className="content">
                          <p className="title">{todo.title}</p>
                          <p className="category">({todo.category})</p>
                      </div>
                      <div className='buttons'>
                          <button className="complete" onClick={() => handleComplete(todo)}>
                            {todo.isCompleted ? "Ativar" : "Completar"}
                          </button>
                          <button className="remove" onClick={() => handleRemove(todo.id)}>
                            x
                          </button>
                      </div>
                  </div>
              ))}
            </div>
        </div>
    );
}

export default TodoList;