
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import './SearchArt.css';

//  const SearchArt = () => {
//   // Gestion du form+button
//   function openSearchBar(e) {
//     e.preventDefault();
//     const input = document.querySelector('.search-form');
//     const search = document.querySelector('input')
//     input.classList.toggle('active');
//     input.classList.add('focus');
//     search.value.length !== 0 ? input.classList.add('focus') : input.classList.remove('focus');
//     console.log("onClick !") 
//     }  
//       const [inputValue, setInputValue] = useState("");
//       console.log(inputValue)
//       useEffect(() => {
//         // fetchData()
//       }, []);

//       // const [SearchTerm, setSearchTerm] = useState("");

//   //stocker la data de la web api dans le state
//   const [data, setData] = useState([])
//   // aller chercher les données de la web API requete GET
 
//   useEffect(() => {
//     axios
//     .get("https://api.europeana.eu/record/search.json?wskey=propalombuy&qf=collection%3Aart&qf=contentTier%3A%282+OR+3+OR+4%29&rows=24&profile=minimal&query=*%3A*&start=1", {headers: {'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
//     .then(response =>{
//       setData(response.data.items)
//       console.log("Data :",response.data.items)
//     })
//     .catch(error => console.log('There was an error!', error))
//     }, []);
    




//   return (
 
//     <ul className="container">
//             <h2>Artistes,Oeuvres,Musée...</h2>
            
//             <div className="search-form">
//               <form>
//                 <input type="text" onChange={(event) => setInputValue(event.target.value)}></input>
//                 <button 
//               onClick={openSearchBar}></button>
//               </form>
//             </div>
          
//           {data.map((item) => (
                
//          <li className="kardGroup">
//               <div className="flipCard">
//                 <div className="flipCardInner">
//                   <div className="flipCardFront">
//                     <h2 key={item.id}>{item.title}</h2>
//                   <img className="pic" src={item.edmIsShownBy} alt="pics" ></img>
//                   </div>
//                   <div className="flipCardBack">
//                     <h3>{item.dcCreator}</h3>
//                     <p>{item.dataProvider}</p>
//                     <p>{item.dcDescription}</p>

                    
//                   </div>
//                 </div>
//          </div>
//     </li>    
    
    


                    
                   
//     ))}

      

      
//     </ul>
    
    
//   )
// }

// export default SearchArt

import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.europeana.eu/record/search.json?wskey=propalombuy&qf=collection%3Aart&qf=contentTier%3A%282+OR+3+OR+4%29&rows=24&profile=minimal&query=*%3A*&start=1"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Artiste, Oeuvres..</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (<li className="kardGroup">
          //               <div className="flipCard">
          //                 <div className="flipCardInner">
          //                   <div className="flipCardFront">
          //                     <h2 key={item.id}>{item.title}</h2>
          //                   <img className="pic" src={item.edmIsShownBy} alt="pics" ></img>
          //                   </div>
          //                   <div className="flipCardBack">
          //                     <h3>{item.dcCreator}</h3>
          //                     <p>{item.dataProvider}</p>
          //                     <p>{item.dcDescription}</p>
          
                              
          //                   </div>
          //                 </div>
          //          </div>
          //     </li>  )
      )}
    </div>
  );
}

export default App;