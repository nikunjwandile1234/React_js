import { useState } from "react"


function App() {
 const [colour,setcolor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:colour}}>
      <div className=" fixed flex flex-wrap justify-center
       bottom-12 px-2 inset-x-0"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolor("red")}className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>
            red</button>
            <button onClick={()=>setcolor("green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>
            green</button>
            <button onClick={()=>setcolor("blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>
            blue</button>
            <button  onClick={()=>setcolor("purple")}className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>
            purple</button>
            <button  onClick={()=>setcolor("maroon")}className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"maroon"}}>
            maroon</button>
            <button onClick={()=>setcolor("black")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>
            black</button>
            <button onClick={()=>setcolor("skyblue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"skyblue"}}>
           sky </button>

          </div> 
          </div>

    </div>
  )
}

export default App
