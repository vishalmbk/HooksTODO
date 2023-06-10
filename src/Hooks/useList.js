import React, { useState } from "react";

/*
we are using

pproperty list:[]

 method: 
push(value) - to add value to list
pull(index)- remove values from index*/

const useList = () => {
    const [list, setList] = useState(["React","reactHooks","Vishal"]);

    const push = (value) => {
        const newList = list.concat(value);
        setList(newList)
    };
    const pull = (index) => {
        const newList = list.filter((listitem,listIndex)=>{
            return listIndex !== index;
            
        });
        setList(newList);
        
    };
    return {
        list: list,
        push: push,
        pull: pull, 
    }

}
export default useList;
