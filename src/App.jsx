
import './App.css'
import { message } from './Message'
import { useState } from 'react'

function App() {
  const [togle, setTogle] = useState(true)
  const [meessage, setmessage] = useState('')
   const togglehandler = ()=>{

     setTogle(!togle)
     messageHandler(  )

   }

   const messageHandler =()=>{
     if(togle){
       
       setmessage(message)
       
      }else{
        setmessage('')
      }
   }

  return (
     < div style={{backgroundColor:'green',width:'100vh',height:'100vh'}} className="main">
      <button onClick={()=>{togglehandler();}}>View Message</button>
    <p>{meessage}</p>
     </div>
  )
}

export default App
