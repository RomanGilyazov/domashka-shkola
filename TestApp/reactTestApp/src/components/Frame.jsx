import React from 'react'

const Frame = (props) => {
  return (
    <div className="frame">
      <div className="photos">      
        <img src="src/img/Head.cj.jpg"/>
      </div>
      <div className="text">
        <h1>{props.name}</h1>
        <p>{props.text}</p>
      </div>
    </div>

  )

    
}

export default Frame
