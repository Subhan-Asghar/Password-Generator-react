import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [lenght, setLenght] = useState(0)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [password, setPassword] = useState("")
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num="0123456789"
  let sym="~!@#%$^&*()_="
  var pass=""
  const checkNumber=()=>{
    if(number){
      setNumber(false)
      console.log(number)
    }
    else{
      setNumber(true)
      console.log(number)
    }
  }
  const checkSymbol=()=>{
    if(symbol){
      setSymbol(false)
      console.log(symbol)
    }
    else{
      setSymbol(true)
      console.log(symbol)

    }
  }
  const main=()=>{
    if(number){
      str+=num;
    }
    if(symbol){
      str+=sym;
    }
    for(let i=0;i<lenght;i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    
    setPassword(pass)
  }
useEffect(() => {
  main()

 
}, [lenght,number,symbol])


  return (
    <>
  <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
  
  <input type="text"
  className='bg-white text-pink-500 rounded-lg px-3 w-80 mx-1  outline-none'
  value={password}
  readOnly />
  <button
    onClick={() => { navigator.clipboard.writeText(password) }}
    className="bg-pink-500 p-2"
    type="button"
  >
    Copy
  </button>

</div>
<div className='flex '>
  <input type="range"   min={8} max={20} onChange={(e)=>{setLenght(e.target.value)}}  className='mx-2 range  accent-pink-500'/> 
  <h3 className='mx-2'>Lenght :{lenght}</h3>
  <input type="checkbox"  onChange={checkNumber} className='mx-1'/>
  <label htmlFor="checkbox">Numbers</label>
  <input type="checkbox" onChange={checkSymbol}  className='mx-1'/>
  <label htmlFor="checkbox">Symbols</label>

</div>


    </>
  )
}

export default App
