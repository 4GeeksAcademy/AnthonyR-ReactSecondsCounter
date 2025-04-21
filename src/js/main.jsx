import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/counter';
import { CountDown } from './components/countdown';
const root = ReactDOM.createRoot(document.getElementById('root'));


// Variables de control
let counter = 0;
let isReversed = false;
let targetValue = null;


const reverse = (e) => {

  const input = parseInt(e.target.value);
  if (!isNaN(input)) {
    targetValue = input;
  }
}


const interval = setInterval(() => {
  if (targetValue !== null && targetValue === counter) {
    isReversed = true;
  }

  counter = isReversed ? counter - 1 : counter + 1;

  if (counter === 0 && isReversed) {
    clearInterval(interval);
  }


  let one = Math.floor((counter / 1) % 10);
  let two = Math.floor((counter / 10) % 10);
  let three = Math.floor((counter / 100) % 10);
  let four = Math.floor((counter / 1000) % 10);
  let five = Math.floor((counter / 10000) % 10);
  let six = Math.floor((counter / 100000) % 10);

  // Render
  root.render(
    <StrictMode>
      <SecondsCounter
        digOne={one}
        digTwo={two}
        digThree={three}
        digFour={four}
        digFive={five}
        digSix={six}
      />
      <CountDown reverse={reverse} />
    </StrictMode>
  );

}, 1000);
