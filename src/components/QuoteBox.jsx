import React from 'react'
import Button from './Button'
// QUOTEBOX IS A CONTAINER THAT CONTENT A TITLE AND PARAGRAPH
const QuoteBox = ({random, randomColor, firstAll}) => {
    
    const colorObj = {
        color: randomColor
    }
  return (
    <article style={colorObj} className='card'>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>

      <p className='text_quote'><i class='bx bxs-quote-alt-left'></i>{random.quote}</p>
      <h2 className='author_quote'>{random.author}</h2>
      <Button 
      firstAll = {firstAll}
      randomColor = {randomColor}
      ></Button>
    </article>
  )
}

export default QuoteBox;
