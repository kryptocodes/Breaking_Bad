import React, { useEffect, useState } from 'react'
import NavBar from './components/navBar/NavBar'

import axios from 'axios'
import Card from './components/layout/card'
import { Link } from 'react-router-dom'
import List from './components/layout/list'
import Loading from './components/layout/loading'

export default function App() {

  const [more, setMore] = useState(0)
  const [data, setData] = useState({ isLoading: true, data: null })
  const [Filter, setFilter] = useState('')
  const [cardOrList, setCardOrList] = useState(true)


  useEffect(() => {
    Filter !== '' ? setMore(0) : setMore(more);
    setData({ isLoading: false })
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${Filter}&limit=10&offset=${more}`)
      .then(response => {
        setData({ isLoading: false, data: response?.data })
      })
  }, [more, Filter])


  return (

    <div>
      <NavBar />
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <h1>Breaking Bad Characters</h1>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Search" className="w-100 input-group-text" onChange={(e) => setFilter(e.target.value)} />
          </div>
        </div>
   
        <div className="p-2 d-flex justify-content-end">
          <button className="btn btn-secondary" type="button" onClick={() => setCardOrList(!cardOrList)}>
            {cardOrList ? 'Card' : 'List'}

          </button>
        </div>
        {data.isLoading ? <Loading/> :
        <>
        {cardOrList ?
          <>
            {data?.data?.map((v, i) => (
              <>
                <List data={v} />
              </>
            ))}
          </>
          :
          <div className="row">
            {data?.data?.map((v, i) => (
              <div className="col-md-3 p-4">
                <Link to={`/${v?.char_id}`}>
                  <Card data={v} />

                </Link>
              </div>
            ))}
          </div>}
          </>
        }
        <nav>
          <ul className="pagination  mx-auto justify-content-center">
            <li className="page-item "><button className={more === 0 ? "bg-white btn rounded-0 text-black" : "bg-dark btn rounded-0 text-white"} onClick={() => more !== 0 && setMore(more - 10)} >Previous</button></li>
            <li className="page-item"><button className={more === 60 ? "bg-white btn rounded-0 text-black" : "bg-dark btn rounded-0 text-white"} onClick={() => more !== 60 && setMore(more + 10)}>Next</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
