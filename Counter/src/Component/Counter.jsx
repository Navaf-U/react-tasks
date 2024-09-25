import React, { useState } from 'react'
import useCounter from './customC'
import { Button } from 'react-bootstrap';
function Counter() {
   
    const {count,increment,decrement,reset,theme,changeTheme,changeThemeD}=useCounter(0)

    return (
    <div className='cont'>
        <div className="cc" style={{backgroundColor: theme==="black"?"black": theme? "red" : "blue"}}>
        <div className='subCont container bg-dark w-25 md-mt-5 md-pb-5'>
        <h1 className='bg-info mt-5  sm-p-3'>{count}</h1>
      <Button variant="outline-success text-white lg-p-4 m-2" onClick={increment}>+</Button>
      <Button variant="outline-danger text-white lg-p-4 m-2" onClick={count>0?decrement:null}>-</Button><br />
      <Button variant="outline-warning text-white mt-2 mb-3" onClick={reset}>Reset</Button>
      <br />
      <Button className="bg-secondary" onClick={changeTheme} onDoubleClick={changeThemeD} >Change bg</Button>
    </div>
    </div>
    </div>
  ) 
}

export default Counter
 