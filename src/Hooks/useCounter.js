import React, { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1); }
    const decrement = () => { setCount(count - 1); }
    return {
        count: count,
        increment: increment,
        decrement: decrement,
    }; //when you are creating hooks there should not be use jsx thats why here we are not returning div


}
export default useCounter;