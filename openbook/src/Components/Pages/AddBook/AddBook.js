import React, { useState } from 'react';
import './AddBook.css';

const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    imageUrl: '',
    category: 'Fiction' // Default category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Information:', bookInfo);
    // You can perform additional actions here, like sending the data to a server
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
              name="title"
              value={bookInfo.title}
              onChange={handleChange}
            />
          </div >
          <div className='inputeclass'>
            <label htmlFor="bookUrl">Book URL:</label><br/>
            <input
              type="text"
              id="bookUrl"
              name="imageUrl"
              value={bookInfo.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className='inputeclass'>
            <label htmlFor="bookCategory">Category:</label>
            <select
              id="bookCategory"
              name="category"
              value={bookInfo.category}
              onChange={handleChange}
            >
              <option value="trending">Trending</option>
              <option value="classic">classic</option>
              <option value="kids">Kids</option>
              <option value="History">History</option>
              <option value="textbook">Testbook</option>
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
