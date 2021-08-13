import React, { useEffect, useState } from 'react'
import NavBar from './components/navBar/NavBar'

import axios from 'axios'
import Card from './components/layout/card'

export default function App() {

  const [more, setMore] = useState(0)
  const [data, setData] = useState({isLoading: true, data: null})
  const [Filter, setFilter] = useState('')
  console.log(Filter)
  useEffect(() => {
    Filter !== '' ? setMore(0) : setMore(more);
    setData({isLoading: false })
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${Filter}&limit=10&offset=${more}`)
      .then(response => {
          setData({isLoading: false, data:response?.data})
      })
  }, [more,Filter])


  return (

    <div>
      <NavBar/>
      <div className="container">
  
        <div className="row">
            <div className="col-md-6">
            <h1>Breaking Bad Characters</h1>
            </div>
            <div className="col-md-6">
            <input type="text" placeholder="Search" className="w-100 input-form" onChange={(e) => setFilter(e.target.value)} />
            </div>
            </div>
            <div className="row">
              {data?.data?.map((v,i) => (
               <div className="col-md-3 p-4">
                  <Card data={v}/>
                </div>
              ))}
            </div>
        
            <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><button class="page-link" onClick={() => more !== 0 && setMore(more-10)} >Previous</button></li>
    <li className="page-item"><button class="page-link" onClick={() => more !== 60 && setMore(more+10)}>Next</button></li>
  </ul>
</nav>
        </div>
        </div>
  )
}
