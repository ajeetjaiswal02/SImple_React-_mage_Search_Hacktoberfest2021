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
<<<<<<< HEAD
      {result.map((phto) => (
        <Cards className="aaaaa" photos={phto}/>
=======
      <div className="img_div">
      {result.map((phto,id) => (
        <img key={id} id={phto} src={phto.urls.small} />
>>>>>>> 5e863a384296072c97b1d5c475a43a43ae40fdda
      ))}
      </div>
    </div>
  );
}
export default App;