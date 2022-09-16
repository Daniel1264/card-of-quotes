import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import Quotes from './json/quotes.json'
import colors from './utils/color'


function App() {

  const randomQuote = (arr) => Math.floor(Math.random ()* arr.length);

  const fisrtElement = Quotes[randomQuote(Quotes)];
  const firstColor = colors[randomQuote(colors)]

  const [random, setRandom] = useState(fisrtElement);
  const [randomColor, setRamdomColor] = useState(firstColor);

  const firstAll = () => {
    setRandom(Quotes[randomQuote(Quotes)])
    setRamdomColor(colors[randomQuote(colors)])
  }

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
