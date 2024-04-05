import React from 'react'
import './BookSlider.css'
import Card from '../Card/Crad'
import { Link } from 'react-router-dom'

const BookSlider = ({Books,name,path }) => {
  return (
   <div className='bookslider'>
     <div className='slider'>
      <div className='sliderHeading'>
        <Link to={path}>{name}</Link>
      </div>
      <div className='outSlider'>
          <div className='sliderContenar'>
           {
              Books.slice(0, 6).map((data, index) => (
                <Card data={data} key={index} />
              ))
            } 
      </div>
      <div className='more'>
      <Link className='lnk' to={path}>more..</Link>
      </div>
      </div>
     
      
    </div>
   </div>
  )
}

export default BookSlider
