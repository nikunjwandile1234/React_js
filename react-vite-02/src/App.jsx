import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

 const addvalue= function()
 {
  if(counter>= 20)
  {
    setcounter(20);
  }
  else{
     counter=counter+1;
  setcounter(counter)
  console.log("value added:",counter);
  }

  
 }

 const removevalue=function()
 {

  if(counter=== 0)
  {
    
    setcounter(0)
  }
  else{

   counter= counter-1;
   setcounter(counter)
  }
 }



  return (
    <>
    <h1>HELLO|NIKUNJ</h1>
    <h1>COUNTER UPDATE </h1>
    <h2>Counter :{counter}</h2>

    <button onClick={addvalue} disabled={counter===20}>Add Value{counter}</button>
    <br/>
    <button onClick={removevalue} disabled={ counter === 0}>remove value{counter}</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
