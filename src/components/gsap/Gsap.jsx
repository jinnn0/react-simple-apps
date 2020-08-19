import React, {useEffect, useState} from "react";
import gsap from 'gsap'

const tl = gsap.timeline();


function Gsap({box, hello}) {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(10)

  useEffect(()=>{
    tl.to('.box-1', 1 ,{x: 400} )
    .to('.box-2', 2 ,{ x: 400, ease:"exppo.inOut"}, "box" )
    .to('.box-3', 3 ,{ x: 400, ease:"exppo.inOut"}, "+=3" )
    .to('.box-4', 1, { x: 400, ease:"exppo.inOut"}, "box+=1" )
  },[data])


  return (
    <div className="gsap-app app-container">
      <div className="app">
        <button onClick={()=>{setCount(count + 2)}}>click me</button>
        <button onClick={()=>{setData(data + 2)}}>click me</button>
        <div className="box box-1"></div>
        <div className="box box-2"></div>
        <div className="box box-3"></div>
        <div className="box box-4"></div>
      </div>
    </div>
  );
}

export default Gsap;
