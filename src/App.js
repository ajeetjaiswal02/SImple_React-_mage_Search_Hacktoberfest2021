import React, { useState }  from 'react';
import "./App.css";
import axios from "axios";
import Cards from "./component/Cards"

function App() {
  const [phto, setphto] = useState("");
  const [result, setResult] = useState([]);

  const clientid = "Your_Api_key"
  function handleChange(event) {
    setphto(event.target.value);
  }
  function handleSumbit(event) {
    console.log(phto);
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
    <div className="App">
      <h1>Image Search App</h1>
      <input
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="Search"
      />
      <button onClick={handleSumbit} type="submit">
        Search
      </button>
      <div className="img_div">
      {result.map((phto,id) => (
        <img key={id} id={phto} src={phto.urls.small} />
      ))}
      </div>
    </div>
  );
}
export default App;