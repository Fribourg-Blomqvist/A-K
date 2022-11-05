import React, {useEffect, useState} from "react";
import axios from "axios";
import Contenu from "./Contenu";
export default function AxiosRequest() {
 //stocker la data dans la web API dans le statement
 const [data, setData] = useState([])

 //aller chercher les données de la web api- requet-GET
const getData =() => {
    axios
    .get("https://api.europeana.eu/record/search.json?wskey=propalombuy&view=grid&query=*%3A*&qf=contentTier%3A%281+OR+2+OR+3+OR+4%29&profile=minimal&rows=24&start=1")
    .then((response) => setData(response.data))
    .catch((err) => console.log(err));
 };

 useEffect(() =>{
    getData();
 }, []);

 return(
    <>
        <div>Axios</div>
        {data.map((art) => (<Contenu key={art.id} />
        ))}
        {/* <h2> <Contenu /> </h2> */}
    </>
 )
}
