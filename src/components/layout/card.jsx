import React from 'react'


const Card = ({ data }) => {
  return (
    <div className="card bg-dark text-white shadow-lg rounded-2 h-100" >
      <img loading="lazy" src={data?.img} className="img-fluid figure-img rounded" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data?.name}</h5>
        <p className="card-text"><span className="badge bg-secondary">Status:</span> {data?.status}</p>
        <p className="card-text"><span className="badge bg-secondary">NickName:</span> {data?.nickname}</p>
      </div>
    </div>
  )
}









export default Card