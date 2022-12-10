import React from "react";
import axios from "axios";
import Card from "./Card" ;
import {useState, useEffect} from "react";
import "./Form.css";


const Form = () =>{
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ma recherche:`);
  }

const [data, setData] = useState([])
  // aller chercher les données de la web API requete GET
 
  useEffect(() => {


    axios
    .get("https://api.europeana.eu/record/search.json?wskey=propalombuy&page=1&qf=TYPE%3A%22IMAGE%22&qf=contentTier%3A%281+OR+2+OR+3+OR+4%29&query=*%3A*&view=grid&profile=minimal&rows=24&start=1", {headers: {'Access-Control-Allow-Origin' : '*',
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
            <form onSubmit={handleSubmit}>		    
                <input type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="What are you looking for?"></input>	    	
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


