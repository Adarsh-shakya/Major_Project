import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'
import BookSlider from '../../BookSlider/BookSlider'
import Footer from '../../Footer/Footer'



const Home = () => {

const [BooksData, setBooksData] = useState([]);


useEffect(() => {
  // Fetch BooksData from your backend server
  axios.get('http://localhost:5000/user/getbook')
    .then(response => {
      setBooksData(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching BooksData:', error);
    });
}, []);
  
  return (
    <div className='home'>
        <div className='homeHeader'>
         <img src="https://www.gatewaycc.edu/sites/default/files/inline-images/Library_Header_with_words.jpg" alt='header img'/>
        </div>
        <div className='HoneContainar'>

             {
              BooksData.map((data,index)=>(
                <BookSlider Books={data.Books} name={data.name} path={data.path} key={index}/>
              ))
             }   
        </div>
        <Footer/>
      
    </div>
  )
}

export default Home
