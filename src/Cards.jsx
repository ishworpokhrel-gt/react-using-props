import React from "react";

function Card(props){
    return (
    <div className='cards'>
        <img src={props.imgsrc} alt="picture" className="card_img"/>
        <div className="card_info">
          <span className="card_catagory">top players </span>
          <h2 className="card_title">{props.name}</h2>
            <button> more info</button>
        </div>
      </div>
    ); 
}
export default Card;