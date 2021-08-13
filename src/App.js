import React, { useEffect, useState } from 'react'
import NavBar from './components/navBar/NavBar'

import axios from 'axios'

export default function App() {

  const [more, setMore] = useState(0)
  const [data, setData] = useState({isLoading: true, data: null})
  useEffect(() => {
    setData({isLoading: false })
    axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=' + more)
      .then(response => {
          setData({isLoading: false, data:response?.data})
      })
  }, [more])
  return (

    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
            <h1>Breaking Bad Characters</h1>
            <div className="list">
              {data?.data?.map((v,i) => (
                <div key={i} className="item">
                  <h2>{v.name}</h2>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a class="page-link" onClick={() => more !== 0 && setMore(more-10)} href="#">Previous</a></li>
    <li className="page-item"><a class="page-link" onClick={() => more !== 60 && setMore(more+10)}>Next</a></li>
  </ul>
</nav>
        </div>
        </div>
    </div>
  )
}
