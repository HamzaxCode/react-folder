import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
      <div><div className="top">
        <div className="logo">
          <img src={props.brandLogo} alt="" />
        </div>
        <button>
          Save
          <Bookmark height={17}/>
          </button>
      </div>
      <div className="center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className="tag">
          <p>{props.tag1}</p>
          <p>{props.tag2}</p>
        </div>
      </div></div>
      
      <div className="bottom">
        <div className="price">
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card
