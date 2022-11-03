import {React, useState} from "react";
import "./DarkBtn.scss"

function DarkBtn() {
  const [dark, setDark] = useState(false)

  function handleTheme(){
    if(!dark){
      setDark(true);
    } else {
      setDark(false);
    }
  }

  return(
    <div>
      <button className={`theme-btn ${dark? "dark" : ""}`} onClick={handleTheme}>
        {!dark? "Light" : "Dark"} Theme
      </button>
    </div>
  )
}

export default DarkBtn