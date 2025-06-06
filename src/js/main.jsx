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
import { Buttons } from './components/buttons';
import { Alarm } from './components/alarm';
const root = ReactDOM.createRoot(document.getElementById('root'));


let counter = 0;
let isReversed = false;
let targetValueReverse = null;
let targetValueAudio = null;
let isPaused = false;
let audio = document.querySelector('audio');


const stop = (e) => {
  isPaused = true;
}

const resume = (e) => {
  if (isReversed && counter !== 0) {
    isPaused = false;
  } else if (isReversed && counter === 0) {
    isReversed = false;
    isPaused = false;
    targetValueReverse = null;
    targetValueAudio = null;
  } else {
    isPaused = false;
  }
}

const restart = (e) => {
  if (counter === 0) {
    isReversed = false;
    isPaused = false;
    targetValueAudio = null;
    targetValueReverse = null;
  } else {
    counter = -1;
    isReversed = false;
    isPaused = false;
    targetValueAudio = null;
    targetValueReverse = null;
  }

}

const alarm = (e) => {
  const input = parseInt(e.target.value);
  if (!isNaN(input)) {
    targetValueAudio = input;
  }
}

const reverse = (e) => {

  const input = parseInt(e.target.value);
  if (!isNaN(input)) {
    targetValueReverse = input;
  }
}

const interval = setInterval(() => {
  
  if (isPaused) {
    return
  }
  
  
  if (targetValueReverse !== null && targetValueReverse === counter) {
    isReversed = true;
  }


  counter = isReversed ? counter - 1 : counter + 1;

  if (counter === 0 && isReversed) {
    isPaused = true;
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
      <Buttons stop={stop} resume={resume} restart={restart} />
      <Alarm alarm={alarm} />
    </StrictMode>
  );

  if (targetValueAudio !== null && targetValueAudio === counter) {
    audio.play();
    isPaused = true;
  }

}, 1000);
