
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Card from "./Card";
import './SearchArt.css';

 const SearchArt = () => {
  // Gestion du form+button
  function openSearchBar(e) {
    e.preventDefault();
    const input = document.querySelector('.search-form');
    const search = document.querySelector('input')
    input.classList.toggle('active');
    input.classList.add('focus');
    search.value.length !== 0 ? input.classList.add('focus') : input.classList.remove('focus');
    console.log("onClick !") 
    }  
      const [inputValue, setInputValue] = useState("");
      console.log(inputValue)
      useEffect(() => {
        // fetchData()
      }, []);

  //stocker la data de la web api dans le state
  const [data, setData] = useState([])
  // aller chercher les données de la web API requete GET
 
  useEffect(() => {
    axios
    .get("https://api.europeana.eu/record/search.json?wskey=propalombuy&view=grid&query=*%3A*&qf=contentTier%3A%281+OR+2+OR+3+OR+4%29&profile=minimal&rows=24&start=1", {headers: {'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
    .then(response =>{
      setData(response.data)
      console.log("Data :",response.data)
    })
    .catch(error => console.log('There was an error!', error))
    }, []);
    const arr = data.map((data, item) =>{
      return(
        <>
        <li>
          {item.title}
          {item.dcCreator}
          {item.dcDescription}
          {item.dataProvider}
          </li> 
        </> 
      )
      
    })
    
  // };




  return (
 
    <div className="container">
      <h2>Artistes,Oeuvres,Musée...</h2>


     
      <div className="search-form">
        <form>
          <input type="text" onChange={(event) => setInputValue(event.target.value)}></input>
          <button 
        onClick={openSearchBar}></button>
        </form>
      </div>
    
    {/* Normalement j'utilise le .map pour afficher mes données API */}
    {/* {data.map((tablo, index)=>(
      < Card key={index} tablo={tablo} />
    ))} */}
    {data.map((item) => (
      <>
      <h2 key={item.id}>{item.dataProvider}</h2>
      <p>{item.dcDescription}</p>
      </>
    ))}
      {arr}
      
      {/* <Card/> */}
      
    </div>
    
    
  )
}

export default SearchArt