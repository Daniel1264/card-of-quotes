import React from 'react'
import Button from './Button'

const QuoteBox = ({random, randomColor, firstAll}) => {
    
    const colorObj = {
        color: randomColor
    }
  return (
    <article style={colorObj}>
      <p>{random.quote}</p>
      <h2>{random.author}</h2>
      <Button 
      firstAll = {firstAll}
      randomColor = {randomColor}
      ></Button>
    </article>
  )
}

export default QuoteBox;
