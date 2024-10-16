import React, { createContext } from 'react'
import UseState from './hook/UseState'
import Fetch_API_Data from './hook/Fetch_API_Data'
import Form from './hook/form'
import ComponetA from './hook/group/ComponetA'
import { Route, Routes } from 'react-router-dom'
import Catwise from './hook/Catwise'

export let nameContext = createContext()

function App() {

  let names = "Raju"
  return (
   <>
   <Routes>
    <Route path="/" element={<Fetch_API_Data/>} />
   </Routes>
   {/* <UseState/> */}
   {/* <Fetch_API_Data/> */}
    {/* <Form/> */}
    {/* <ComponetA username={names}/> */}
    {/* <nameContext.Provider value={names}>
    <ComponetA/>
    </nameContext.Provider>    */}
    {/* <Catwise/> */}
   </>
  )
}

export default App

