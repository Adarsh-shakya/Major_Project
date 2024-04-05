import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'

const Kids = () => {
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

  const kidBooksData = BooksData.find(data => data.name === 'Kids Book');

  return (
    <div className='page'>
       <div className='pageHeader'>
        <div className='headerContenar'>
        <h1>Kids book</h1>
        </div>
        </div> 
        <div className='pageContenar'>
           <div className='books'>
           <div className='addButton'>
          <Link to='addbook'><i class="bi bi-plus-lg"></i></Link>
          </div>
          {kidBooksData && kidBooksData.Books.map((book, index) => (
              <Card data={book} key={index} />
            ))}
           </div>
        </div>     
    </div>
  )
}

export default Kids
