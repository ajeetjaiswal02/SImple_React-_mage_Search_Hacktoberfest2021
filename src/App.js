import React, { useState } from 'react';
import "./App.css";
import axios from "axios";
import Cards from "./component/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './component/ParticleBackground';
function App() {
  const [phto, setphto] = useState("");
  const [result, setResult] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const clientid = "Your_API_KEY"
  function handleChange(event) {
    setphto(event.target.value);
  }
  function handleSumbit(event) {
    console.log(phto);
    setSearchTerm(phto);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      phto +
      "&client_id=" +
      clientid;
    axios.get(url).then((response) => {
      console.log(response.data.results);
      setResult(response.data.results);
    });
  }

  return (
    <div className="App" >
      <ParticleBackground />
      <div className="headder">
        <h1 >Image Search App</h1>
      </div>
      <div className="input-group mb-3 w-50 m-auto pt-3">
        <input
          className="form-control"
          onChange={handleChange}
          type="text"
          name="photo"
          placeholder="Search"
        />
        <button
          onClick={handleSumbit}
          type="submit"
          className="btn-primary btn"
        >
          Search
        </button>
      </div>
      {
        (searchterm == "")
          ? <h3 className="text-secondary fs-5"> Enter keywords to search  </h3>
          : <h3 className="text-secondary fs-5"> Showing results for "<span className="text-primary"> {searchterm} </span> " </h3>
      }


      <div className="w-100 d-flex justify-content-around flex-wrap">

        {result.map((phto) => (
          <Cards photos={phto} />
        ))}

      </div>
    </div>
  );
}
export default App;