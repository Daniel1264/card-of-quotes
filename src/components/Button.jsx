import React from 'react'


const Button = ({firstAll, randomColor}) => {

    const backgroundObj = {
        backgroundColor: randomColor
    }

// THIS IS A BUTTON THAT RECHARGES THE STATUS
  return (
    <div>
      <button style={backgroundObj} className='btn' onClick={firstAll}>&gt;</button>
    </div>
  )
}

export default Button;
