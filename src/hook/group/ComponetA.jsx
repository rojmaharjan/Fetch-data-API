import React from 'react'
import ComponentB from './ComponentB'

function ComponetA() {
  return (
   <>
    <h1>Component A</h1>
    {/* <ComponentB username={props.username}/> */}
    <ComponentB/>
   </>
  )
}

export default ComponetA
