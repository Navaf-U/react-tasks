import { useState } from "react";

function useCounter(i=0){
    const [count,setCount]=useState(i)
const [theme,setTheme]=useState(false)
    const increment = () => setCount(c=>c+1)
    const decrement = () => setCount(c=>c-1)
    const reset = () => setCount(i)
    const changeTheme = ()=>{
        setTheme(t => t === false ? 'red' : false);
    }
    const changeThemeD = ()=>{
        setTheme("black")
    }
    return {count,increment,decrement,reset,theme,changeTheme,changeThemeD}
}

export default useCounter