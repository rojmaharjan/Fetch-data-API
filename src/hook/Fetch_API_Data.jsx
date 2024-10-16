import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch_API_Data() {
    let [api_data,setApi_data]=useState([])
    let [api_cat,setApi_cat]=useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setApi_data(data))

            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(cat=>setApi_cat(cat))
    },[])
    console.log(api_data)
  return (
    <>
    <div className="container">
    <h1>Category</h1>
    <div className="row bg-secondary text-light">
        {api_cat.map((cat)=>
        <div className="col-3">

            <h2><Link to={`/catwise/${cat}`} className='nav-link' >{cat}</Link></h2>
        </div>    
   
        )
        }
    </div>

    </div>

         
     <div className="container">
     <h1>Products</h1>
     <div className="row">
     {api_data.map((ad)=>
   <div className='col-3 p-1'>
  <div className="card" style={{width: '18rem'}}>
    <img src={ad.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{ad.title}</h5>
      <p className="card-text">{ad.description}</p>
      <h5 className="card-title">${ad.price}</h5>
      <a href="#" className="btn btn-primary">BUY</a>
    </div>
  </div>
</div>


        )}
        </div>
     </div>
    </>
       
     
    
  )
}

export default Fetch_API_Data
