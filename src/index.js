import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import oldarray from './Oldarray';
import './index.css';

ReactDOM.render(
      <>
    <h1 className="headings"> finest players of the world</h1>
   
    <Card imgsrc={oldarray[0].images}
          name={oldarray[0].names}
    />

    <Card imgsrc={oldarray[1].images}
          name={oldarray[1].names}
    />

    <Card imgsrc={oldarray[2].images}
          name={oldarray[2].names}
    />

    <Card imgsrc={oldarray[3].images}
          name={oldarray[3].names}
    />

    <Card imgsrc={oldarray[4].images}
          name={oldarray[4].names}
    /> 
</>
  ,document.getElementById("root"));