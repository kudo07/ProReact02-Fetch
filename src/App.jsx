import { useEffect, useState } from 'react';
import './App.css'
export default function App() {
  const [advice,setAdvice] = useState("")
  const [count,setCount]=useState(0);



  async function GetAdvice(){
  const res= await fetch('https://api.adviceslip.com/advice');
  const data=await res.json();
  // console.log(data.slip.advice)
  setAdvice(data.slip.advice)
  setCount(c=>c+1);

}

 useEffect(function(){
  GetAdvice();
 },[])
  return (
    <div>
    <h1>hello</h1>
    <h1>{advice}</h1>
    <button onClick={GetAdvice}>Get advice</button>
    <Message count={count}/>
   
    </div>
  )
}

function Message(props){
  return  <p>yout have read <strong> {props.count} </strong> pieces of advice
    </p>
}
