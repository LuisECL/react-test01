import {React, useState} from "react";

function DarkBtn() {
  const [theme, setTheme] = useState("Light")

  function handleTheme(){
    if(theme === "Light"){
      setTheme("Dark")
    } else {
      setTheme("Light")
    }
  }

  return(
    <div>
      <button onClick={handleTheme}>
        {theme} Theme
      </button>
    </div>
  )
}

export default DarkBtn