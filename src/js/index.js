//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 999980
let numeration = [ "0", "0", "0", "0", "0", "0"]

  setInterval(() =>{
    
    seconds++
    if(seconds == 999999){
      seconds = 0 
      numeration = [ "0", "0", "0", "0", "0", "0"]
    }
    let secondsString = seconds.toString()
    
    for(let i = secondsString.length - 1; i >=0 ; i--){
     numeration[numeration.length-1 - i ] = secondsString[secondsString.length -1 - i]
     ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={numeration}/>);

    }
    
  }, 500)


  