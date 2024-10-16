import React, { useState } from 'react'

function Form() {

    let [fname, setFname]=useState(" ")
    let getData = (e)=>{
        //console.log(e.targe.value)
        setFname(e.target.value)
    }
    let abc=(e)=>{
        e.preventDefault()
        console.log(fname)
    }
  return (
    <>
    <h1>Welcome {fname}</h1>
    <form onSubmit={abc}>
    <input type='text' onChange={getData} name='fName'/>
    <button>Send</button>
    </form>
    
    </>
  )
}

export default Form