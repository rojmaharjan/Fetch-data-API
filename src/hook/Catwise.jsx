import React, { useEffect, useState } from 'react'

function Catwise() {
    let [catwise, setCatwise]=useState([])
        useEffect(()=>
            {
                fetch('https://catfact.ninja/fact')
            },)
    
  return (
    <>
    <h1>Catwise</h1>
    </>
  )
}

export default Catwise
