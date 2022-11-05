import React from "react";
import "./App.scss"
import NavBar from "./components/Navbar.js";
import DarkBtn from "./components/DarkBtn";
import AddCards from "./components/AddCards";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <h2>UseState example:</h2>
        <DarkBtn/>

        <h2>UseEffect example:</h2>
        <AddCards/>
      </main>
    </div>
  );
}

export default App;
