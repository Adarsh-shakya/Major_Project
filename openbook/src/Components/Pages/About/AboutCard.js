import React from 'react'
import './AboutCard.css'

const AboutCard = ({photo,naam,about}) => {
  return (
    <div className='aboutCard'>
      <div className='aboutCardImg'>
        <img src={photo} alt='sorry'/>
      </div>
<div className='naam'> {naam}</div>
<div className='aboutMe'>
   {about}
</div>

<div className='socialMedia'>
<i class="bi bi-instagram"></i>
<i class="bi bi-linkedin"></i>
<i class="bi bi-facebook"></i>
<i class="bi bi-twitter"></i>
</div>

    </div>
  )
}

export default AboutCard
