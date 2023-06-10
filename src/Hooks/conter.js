import React from "react";
import useCounter from "./useCounter";
const Counter =()=>{
    const {count,increment,decrement}=useCounter()
    return(<div>{count}
      
    <button onClick={increment}>add</button>
    <button onClick={decrement}>decr</button>
    </div>

    )
}
export default Counter;