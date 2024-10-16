import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Items_Search() {
    let [title, setTitle] = useState([])
    let [search, setSearch]=useState("")
    let [error, setError]=useState("")

    useEffect(()=>
        {
          axios.get("https://jsonplaceholder.typicode.com/todos")  
          .then((res)=>{console.log(res.data)})
          .then((res)=>{settitle(res.data)})
        },[])

        
  let searchData = title.filter((sd)=>sd.title.includes(search))
  console.log(searchData)  
  let getSearch=(e)=>{      
      setSearch(e.target.value)
  }
  return (
    <>
     <div className="container py-5">
                <div className="row">
               
                    <div className="col">                        
                        <input type="text"  name="txtsearch" onChange={getSearch}/>
                    </div>
                </div>
                {searchData.map((t, id) =>
                    <div className="row border-bottom border-danger py-1" key={id} >
                        <div className="col">{t.title}</div>
                    </div>
                )}


            </div>
    </>
    
  )
}

export default Items_Search
