import React from 'react'


const Button = ({firstAll, randomColor}) => {

    const backgroundObj = {
        backgroundColor: randomColor
    }
  return (
    <div>
      <button style={backgroundObj} className='btn' onClick={firstAll}>&gt;</button>
    </div>
  )
}

export default Button;
