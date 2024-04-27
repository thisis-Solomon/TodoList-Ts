import React, { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todoContext";

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">What's your todo?!</label>
      <input
        ref={inputTextRef}
        type="text"
        id="text"
        placeholder="What's your todo?!"
      />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
