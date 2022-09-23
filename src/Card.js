import React from 'react'
import mountain from './image/mountain.jpg'
import svg from './image/svg.png'

const Card = () => {
  return (
    <div className='container'>
      <img className='photo' src={mountain} alt='Mountains' />
      <div className='content'>
        <p className='title'>An Above Average Experience</p>
        <p className='description'>
          Travel to the premiere mountain tops of New Zealand with our guided
          tours. Take in the majestic scenary and witness beauty.
        </p>

        <img src={svg} className='link' alt='link' />
      </div>
    </div>
  )
}

export default Card
