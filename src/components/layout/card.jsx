import React from 'react'


const Card = ({ data }) => {
  const Badge = ({title,content}) => (
    <p className="card-text"><span className="badge bg-secondary">{title}:</span> {content}</p>
  )
  return (
    <div className="card bg-dark text-white shadow-lg rounded-2 h-100" >
      <img loading="lazy" src={data?.img} className="img-fluid figure-img rounded" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data?.name}</h5>
        <Badge title="Status" content={data?.status} />
        <Badge title="NickName" content={data?.nickname} />
        <Badge title="Occupation" content={data?.occupation.map((v) => <>{v} </>)} />
        <Badge title="Date of Birth" content={data?.birthday} />
      </div>
    </div>
  )
}









export default Card