import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/counter';
const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
setInterval(() => {

  let one = Math.floor((counter / 1) % 10);
  let two = Math.floor((counter / 10) % 10);
  let three = Math.floor((counter / 100) % 10);
  let four = Math.floor((counter / 1000) % 10);
  let five = Math.floor((counter / 10000) % 10);
  let six = Math.floor((counter / 100000) % 10);
  counter++

  
  root.render(
    <React.StrictMode>
      <SecondsCounter
        digOne={one}
        digTwo={two}
        digThree={three}
        digFour={four}
        digFive={five}
        digSix={six}/>
        

    </React.StrictMode>,
  )
}, 1000)
