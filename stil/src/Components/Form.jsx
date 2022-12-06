import React from "react";
import axios from "axios";
import Card from "./Card" ;
import {useState, useEffect} from "react";
import "./Form.css";


const Form = () =>{
    const [inputValue, setInputValue] = useState("");
    //       console.log(inputValue)
    // /      useEffect(() => {
    //         // fetchData()
    //       }, []);

const [data, setData] = useState([])
  // aller chercher les données de la web API requete GET
 
  useEffect(() => {
    axios
    .get("https://api.europeana.eu/record/search.json?wskey=propalombuy&qf=collection%3Aart&qf=contentTier%3A%282+OR+3+OR+4%29&rows=24&profile=minimal&query=*%3A*&start=1", {headers: {'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
    .then(response =>{
      setData(response.data.items)
      console.log("Data :",response.data.items)
    })
    .catch(error => console.log('There was an error!', error))
    }, []);

return (
   <>
        <div className="webdesigntutsWorkshop">
            <form>		    
                <input type="text"
                 
                 onChange={(event) => setInputValue(event.target.value)} placeholder="What are you looking for?"></input>	    	
                <button>Search</button>
            </form>
        </div>

            {data
                
                .map((item,id) => (
                    
                <Card key={id} item={item}/>                     
                        
            ))}

    </> 
  )

}

export default Form


