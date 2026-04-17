import { useState } from "react"

export default function Task1() {
    const [counter,setCounter]=useState(0)
    function increment(){
        setCounter((prev)=>prev+1)
    }
    function decrement(){
        if(counter>0){
            setCounter((prev)=> prev -1)
        }else{
            alert('you can not have negative number')
        }
    }
  return (
    
    <div>
      {/* Create a Counter Component. It should display a number and have two buttons:
       "Increment" and "Decrement." Ensure the number never goes below zero. */}
       <h1 className="text-6xl font-bold ml-20">{counter}</h1>
       <button  className="bg-green-400 p-2 m-2" onClick={()=>increment()}>Increment</button>
       <button className="bg-red-400 p-2 m-2" onClick={()=> decrement()}>Decrement</button>
    </div>
  )
}
