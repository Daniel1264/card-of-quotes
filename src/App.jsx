import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import Quotes from './json/quotes.json'
import colors from './utils/color'


function App() {
// randomQuote is a function thtat return a position random

  const randomQuote = (arr) => Math.floor(Math.random ()* arr.length);

//  FIRSTELEMENT AND FIRSTCOLOR ARE CONSTANTS THAT RECEIVE A VALUE OF  A POSITION 

  const fisrtElement = Quotes[randomQuote(Quotes)];
  const firstColor = colors[randomQuote(colors)]

// THESE TOW CONSTANTS ARE A HOOK 

  const [random, setRandom] = useState(fisrtElement);
  const [randomColor, setRamdomColor] = useState(firstColor);

// THIS A FUNCTION RETURN THE STATE OF HOOK
  const firstAll = () => {
    setRandom(Quotes[randomQuote(Quotes)])
    setRamdomColor(colors[randomQuote(colors)])
  }

// THIS CONSTANT CONTENT AN OBJECT THAT IS  A BACKGROUND

  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <div style={backgroundObj} className="App">
    <QuoteBox
     random = {random}
     randomColor = {randomColor}
     firstAll = {firstAll}
     >
     </QuoteBox>
    </div>
  )
}

export default App
