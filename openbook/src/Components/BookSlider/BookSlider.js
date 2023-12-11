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
      <div className='sliderContenar'>
        {
          Books.map((data,index)=>(
            <Card data={data} key={index}/>
          ))
        }
      </div>
    </div>
   </div>
  )
}

export default BookSlider
