import React, { useRef, useState } from "react";

export const NewTodo: React.FC<{onAddTodo: (str: string) => void}> = (props) => {
//   const todoTextInputRef = useRef<HTMLInputElement>(null);
  const [text, settext] = useState('');
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoTextInputRef.current?.value;
    if(text?.trim().length === 0) {
        return;
    }

    // props.onAddTodo(enteredText!);
    props.onAddTodo(text);
    settext('');
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
      settext(event.currentTarget.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" /*ref={todoTextInputRef}*/ value={text} onChange={onChangeHandler}/>
      <button>Add Todo</button>

    </form>
  );
};
