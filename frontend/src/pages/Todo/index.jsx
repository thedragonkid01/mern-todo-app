import { useState } from "react";
import { useEffect } from "react";
import todoApi from "../../api/todoApi";
import TodoList from "../../components/TodoList";

function Todo(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await todoApi.getAll();
      setTodoList(todos);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h4 className="text-center">Todo Application</h4>
      <div className="d-flex">
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default Todo;
