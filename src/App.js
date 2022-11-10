import React from "react";
import "./App.scss"
import NavBar from "./components/Navbar.js";
import DarkBtn from "./components/DarkBtn.js";
import AddCards from "./components/AddCards";
import ApiWithFetch from "./components/ApiWithFetch/index.js";
import ApiWithAxios from "./components/ApiWithAxios";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <h2>UseState example:</h2>
        <DarkBtn/>

        <h2>UseEffect example:</h2>
        <AddCards/>

        <h2>API call with fetch</h2>
        <ApiWithFetch />

        <h2>API call with Axios</h2>
        <ApiWithAxios />
      </main>
    </div>
  );
}

export default App;
