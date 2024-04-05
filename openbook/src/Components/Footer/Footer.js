import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerbody'>
            <div className='footercontenar'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-messenger"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-twitter"></i>
            </div>
        </div>
      <div className='bottumfooter'>
      &copy; {new Date().getFullYear()} Copyright: Openlibrary.com
      </div>
    </div>
  )
}

export default Footer
