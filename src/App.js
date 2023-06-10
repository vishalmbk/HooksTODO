
import { useState } from 'react';
import './App.css';
import useList from './Hooks/useList';



function App() {

  const { list, push, pull } = useList();
  const [todo,setTodo]=useState("")
  const onSubmitHandler = (event)=>{
   event.preventDefault();
   push(todo);
   setTodo("")
  };
  return (
    <div className="App">
    <form onSubmit={onSubmitHandler}>
      <div>
        <label for="todo" id="todo">Add Todo</label>
        <input type="text" id='todo' value ={todo} onChange={(event)=>{
          setTodo(event.target.value);
        }}/>
      </div>
    </form>
      <ul>
        {list.map((listitem, index) => {
          return <li key={index}>
          <div>{listitem}</div>
          <button onClick={()=>{pull(index);}}>Remove</button></li>;
        })}
      </ul>
    </div>
  );
}

export default App;
