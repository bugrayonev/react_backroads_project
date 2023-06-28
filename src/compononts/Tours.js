import React from 'react'

const Tours = ({image:img,date,title,info,location,duration,cost}) => {
  return (
    <article className="tour-card" >
    <div className="tour-img-container">
      <img src={img} className="tour-img" alt="" />
      <p className="tour-date">{date}</p>
    </div>
 
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
        <p>{duration}</p>
      </div>
      <p>
      {info}
      </p>
      <div className="tour-footer">
        <p>
          <span>
            <i className="fas fa-map"></i>
         {location}
          </span>
        </p>
        <p>from ${cost}</p>
      </div>  
    </div>
  </article>
  )
}

export default Tours
