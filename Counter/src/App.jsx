import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Component/Counter'
import NavBar from './Component/nav';


function App() {
  return (
    <>
    <NavBar/>
    <Counter/>
    </>
  )
}

export default App
