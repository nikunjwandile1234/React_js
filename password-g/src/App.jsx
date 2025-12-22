
import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'




function App() {
  const [length, setlength] = useState(8)
  const [numbersallowed,setnumallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")
  const passwordref=useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersallowed) str+="0123456789"
    if(charallowed) str+="~ ! @ # $ % ^ & * ( ) _ + { } | : < > ? - = [ ] \ ; ' , . /"
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }

    setpassword(pass)
  },[length,numbersallowed,charallowed,setpassword])
  const copypasstoclip =useCallback(()=>
  {
    if (passwordRef.current) {
  passwordRef.current.focus();
  passwordRef.current.setSelectionRange(0, passwordRef.current.value.length);
}

    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(()=>{
    passwordgenerator()},[length,numbersallowed,charallowed,setpassword])
  
  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 my-8 text-red-400 bg-gray-700'>
      <h1 className='text-white text- my-3'>Password generator</h1>
      <div className='flex bg-white shadow rounded-lg overflow-hidden mb-5'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3' 
        placeholder='password'
        readOnly
        ref={passwordref}/>
        <button onClick={copypasstoclip}
        className=' outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0'> copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100} 
          value={length}
          className=' cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label> length:{length}</label>
        </div>
          <div className='flex item-center gap-x-1'>
            <input 
          type="checkbox"
          defaultChecked={numbersallowed}
          id='numberinput'
          onChange={()=>{
            setnumallowed((prev)=>!prev)
          }}
          />
          <label htmlFor="numberinput">Numbers </label>
          <div className='flex item-center gap-x-1'>
            <input 
          type="checkbox"
          defaultChecked={charallowed}
          id='charinput'
          onChange={()=>{
            setcharallowed((prev)=>!prev)
          }}
          />
          <label htmlFor="charinput">character</label>
          </div>

          </div>

        

      </div>
          </div>
    </>
  )
}

export default App
