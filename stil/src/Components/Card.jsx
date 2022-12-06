import React from 'react';
// import { Link } from 'react-router-dom';
// import  { useState, useEffect } from 'react';
import "./Card.css";



const Card = ({item}) =>{
  
    
    return( 


        <div className="content">
             <div className="card">
                    <div className="front">
                        <h2>{item.title}</h2>
                        <img className="pic" src={item.edmIsShownBy} alt="pics" ></img>
                    </div>
                <div className="back">
                    <div>
                        <h3>{item.dcCreator}</h3>
                        <p>{item.dataProvider}</p>
                        <p>{item.dcDescription}</p>
                        {/* <Link to = 'https://google.com/'><button className="button">Click Here</button></Link> */}
                    </div>
                </div>
            </div>
          
        </div>  
    )
}

export default Card;