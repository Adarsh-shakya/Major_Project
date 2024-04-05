import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import adarsh from '../../../Image/adarsh.jpg'
import krishna from '../../../Image/krishna.jpg'
import akash from '../../../Image/akash.jpg'
import dharamveer from '../../../Image/dharamveer.jpg'

const About = () => {
  const aboutus=[
    {
      ima:adarsh,
      naam:"Adarsh shakya",
      about:"Experienced frontend engineer proficient in React, with diverse website development ."
    },
    {
      ima:akash,
      naam:"Akash Yadav",
      about:"Database engineer skilled in designing and optimizing data systems"
    },
    {
      ima:krishna,
      naam:"Krishna Gautam",
      about:"Skilled cloud engineer adept at managing, optimizing, and securing cloud infrastructure"
    },
    {
      ima:dharamveer,
      naam:"Dharmveer",
      about:"Backend engineer proficient in building scalable and efficient systems."
    }
  ]
  return (
    <div className='abouts'>
      <div className='aboutImg'>
      <img src='https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/04/20024511/Educationimg12.jpg' alt="sorry" />
      </div>
      <div className='aboutText'>
        <div className='heding'> About Us</div>
        <div className='pera'>
          this is a dummy conten whis is comy from loren20
          <br/> not about this project it is only
          jio jee that is for...
        </div>
        
      </div>
      <div className='aboutcard'>
      {
              aboutus.map((data,index)=>(
                <AboutCard photo={data.ima} naam={data.naam} about={data.about} key={index}/>
              ))
             }   
         
        </div>
    </div>
  )
}

export default About
