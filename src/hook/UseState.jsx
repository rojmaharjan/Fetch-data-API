import React, { useEffect, useState } from 'react'

function UseState() {
    const [count, setCount]=useState(5)
    const [testcount, settestCount]=useState(10)

    useEffect(()=>{
        console.log("useEffect called= " + count + testcount)
    },[testcount])
    //  let inc= ()=>{
       // setCount(count+1)
    //  }
    //   let dec= ()=>{
       // setCount(count-1)
    //   }
  return (
   <>
   {/* <h1>Example of usestate</h1>
   <hr/>
   <button onClick={()=>setCount(count+1)}>+</button>
   {count}
   <button onClick={()=>setCount(count-1)}>-</button>

   <br/>
   <br/>
   <button onClick={()=>settestCount(testcount+10)}>+</button>
   {testcount}
   <button onClick={()=>settestCount(testcount-10)}>-</button> */}

   </>
  )
}

export default UseState
