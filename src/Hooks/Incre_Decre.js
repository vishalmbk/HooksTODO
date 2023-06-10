import React from "react";
import useCounter from "./useCounter";
const IncreDecre =()=>{
    const{count,increment,decrement}=useCounter()
    return(<div>{count}<br/><br/>
    <button onClick={increment}>incre</button>
    <button onClick={decrement}>decre</button>
    </div>)
}
export default IncreDecre;