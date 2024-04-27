import { createContext, useState } from "react";
import Todo from "../models/Todo";

export const TodosContext = createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodo] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    const newTodo = new Todo(item);

    setTodo((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodo((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
