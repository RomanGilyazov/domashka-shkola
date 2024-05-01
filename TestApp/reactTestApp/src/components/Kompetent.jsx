import React from 'react'

const Kompetent = (props) => {
  const style = {
    marginTop: props.marginTop,
    marginLeft: props.marginLeft,
    position: props.position
  };
  return (
    <div style={style}> 
      <div className="Kompetent">
      <div className="photos1">      
        <img src={props.src}/>
      </div>
      <div className="text1">
        <p>{props.name}</p>
      </div>
    </div>
    </div>

  )
}

export default Kompetent



