import React, { useContext } from 'react'
import { nameContext } from '../../App'

function ConmponentC() {
    let names = useContext(nameContext)
  return (
    <>
    <h1>Component C</h1>
    {/* <h1>My name is :{props.username}</h1> */}
    <h1> my name is : {names}</h1>
    </>
  )
}

export default ConmponentC
