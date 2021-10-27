import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, removeTodo, selectTodos } from "./store/store";

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button {...rest}>{title ?? children}</button>
);

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const newTodoRef = useRef<HTMLInputElement>(null);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      // addTodo(newTodoRef.current.value)
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Hello world from extensive typescript using RTK</h1>
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </>
        )}
      />
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

export default App;
