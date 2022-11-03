import {React, useState} from "react";
import "./DarkBtn.scss"

function DarkBtn() {
  const [theme, setTheme] = useState("Light")

  function handleTheme(e){
    if(theme === "Light"){
      setTheme("Dark");
      e.target.classList.toggle("dark");
    } else {
      setTheme("Light");
      e.target.classList.toggle("dark");

    }
  }

  return(
    <div>
      <button className="theme-btn" onClick={handleTheme}>
        {theme} Theme
      </button>
    </div>
  )
}

export default DarkBtn