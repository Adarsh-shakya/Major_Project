import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactHeader'>
        Contact
      </div>
      <div className='contactbody'>
        <div className='leftbody'>
          <h2>Contact Form :</h2>
          <form>
            <label>Full Name</label><br/>
            <input type='text'/><br/>
            <label>Email address</label><br/>
            <input type='Email' placeholder='name@example.com'/><br/>
            <label>example textarea</label><br/>
            <textarea rows="4" cols="58"/><br/>
          </form>
        </div>
        <div className='rightbody'>
          <h2>Address :</h2>
          <div className='address'>
            17 KM Stone,NH#2 Mathura-Delhi Road,<br/>
            P.O.:Chaumuhan,Mathura- 281406 (UP) india<br/>
            <i class="bi bi-telephone-forward"></i>
            +91 5662XXXXX <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.607730639951!2d77.5933245!3d27.605688699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1708090379780!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
