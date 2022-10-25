import React, { useState } from 'react';
import "./App.css";
import axios from "axios";
import Cards from "./component/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './component/ParticleBackground';
import DarkModeToggle from "react-dark-mode-toggle";
import Spinner from "./component/Spinner";

function App() {
  const [phto, setphto] = useState("");
  const [result, setResult] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [isLoading, setIsLoading] = useState(false);
  const clientid = "Your_API_KEY";
  function handleChange(event) {
    setphto(event.target.value);
  }
  function handleSumbit(event) {
    setIsLoading(true);
    event.preventDefault();
    console.log(phto);
    setSearchTerm(phto);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      phto +
      "&client_id=" +
      clientid;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setResult(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <div className="App" >
        <ParticleBackground />
        <div className="header">
          <h1 >Image Search App</h1>
        </div>
        <form onSubmit={handleSumbit} className="input-group mb-3 w-50 m-auto pt-3">
          <input
            className="form-control"
            onChange={handleChange}
            type="search"
            name="photo"
            placeholder="Search"
          />
           <button
            type="submit"
            className="btn-primary btn"
            >
            Search
          </button>
        </form>
        {
          (!searchterm)
          ? <h3 className="text-secondary fs-5"> Enter Keywords To Search  </h3>
          : <h3 className="text-secondary fs-5"> Showing Results F  or "<span className="text-primary"> {searchterm} </span> " </h3>
        }
        {isLoading ? (
          <div className="w-100 mt-5 d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        ) : (
          <div className="w-100 d-flex justify-content-around flex-wrap">
            {result.map((phto) => (
              <Cards photos={phto} />
            ))}
          </div>
        )}
      </div>
      <DarkModeToggle
        className="dark-mode-toggle-btn"
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    </div>
  );
}

export default App;
