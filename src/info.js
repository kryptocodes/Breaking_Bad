import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './components/layout/loading'
import NavBar from './components/navBar/NavBar'




const Info = () => {
    const { id } = useParams()
    const [data, setData] = useState({ isLoading: true, data: false })
    const [quotes,setQuotes] = useState({ isLoading: true, data: false })
    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            .then(response => {
                FetchQuotes({name:response.data?.[0]?.name})
                setData({ isLoading: false, data: response.data })
              
            })
            
       
    }, [id])


    const FetchQuotes = ({name}) => {
        axios.get(`https://www.breakingbadapi.com/api/quote?author=${name}`)
            .then(response => {
                setQuotes({ isLoading: false, data: response.data })
            })
    }


    const InfoContent = ({ title, content }) => (
        <>
            <h5>{title}</h5>
            <p>{content}</p>
        </>
    )

    const Content =  () => {
        const { img, name, birthday, occupation, status, nickname, portrayed, appearance } = data?.data[0]
    


        return (
            <div className="container p-2">
                <div className="row">
                    <div className="col-md-3 pb-2 ">
                        <img className="img-fluid rounded shadow-sm" src={img} alt="image" />

                        <div className="p-4 mt-2 card rounded-0 shadow">
                            <h4>Personal Info</h4>
                            <InfoContent title="Full Name" content={name} />
                            <InfoContent title="Birthday" content={birthday} />
                            <InfoContent title="Occupation" content={occupation} />
                            <InfoContent title="Status" content={status} />
                            {nickname && <InfoContent title="Nickname" content={nickname} />}
                            <InfoContent title="Portrayed" content={portrayed} />

                        </div>
                    </div>
                    
                    <div className="col-md-9 ">
                        <div className="card p-4 shadow rounded-0 ">
                        <h1>{name}</h1>
                        <hr/>
                        <h4 className="bg-success text-white p-2">Appearance</h4>
                        <div className="row ">
                        {appearance.map((v) =>
                            <>
                                <div className="col-md-4">
                                
                                    <div className="card-body">
                                        <h4 className="card-title">Season {v}</h4>
                                    </div>
                                
                                </div>
                            </>)}
                            </div>

                        <h4 className="mt-4 mb-4 p-2 bg-success text-white">Quotes</h4>
                        {quotes?.isLoading ? <Loading/> : 
                        quotes?.data.length === 0 ? <p className="mx-auto">No quotes</p> :
                        quotes?.data?.map((v) =>
                            <div className="p-2">
                            <p className="fst-italic">"{v?.quote}"</p>
                            </div>
                        )}
                    </div>
                    </div>
                </div>

            </div>

        )
    }


    return (
        <div>
            <NavBar />
            {data.isLoading ? <Loading/> : Content()}
      
        </div>
    )
}









export default Info