import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    img: '',
    link: '',
    name: 'Trending Book' // Default category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Book Information:', bookInfo);
    try {
      const response = await axios.put('http://localhost:5000/user/book', bookInfo);
      if (response.status === 200) {
        console.log('Book added successfully');
        // Optionally, you can reset the form after successful submission
        setBookInfo({
          img: '',
          link: '',
          name: 'Trending Book'
        });
        navigate('/');
      } else {
        console.error('Failed to add book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='addbook'>
      <div className='addContainer'>
        <div className='logo addbooklogo'>
          <img src="https://th.bing.com/th/id/OIP.Vd4JHVC-H25ltfHhThg2BwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputeclass'>
            <label htmlFor="bookTitle">Book Title:</label><br/>
            <input
              type="text"
              id="bookTitle"
              name="img"
              value={bookInfo.title}
              onChange={handleChange}
            />
          </div >
          <div className='inputeclass'>
            <label htmlFor="bookUrl">Book URL:</label><br/>
            <input
              type="text"
              id="bookUrl"
              name="link"
              value={bookInfo.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className='inputeclass'>
            <label htmlFor="bookCategory">Category:</label>
            <select
              id="bookCategory"
              name="name"
              value={bookInfo.category}
              onChange={handleChange}
            >
              <option value="Trending Book">Trending </option>
              <option value="Classic Book">Classic</option>
              <option value="Kids Book">Kids</option>
              <option value="History Books">History</option>
              <option value="textBook">Testbook</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className='addbookbtn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
