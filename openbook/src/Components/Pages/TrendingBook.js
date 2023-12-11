import React from 'react'
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'


const TrendingBook = () => {
  const Books=[
    {
      "img":"https://covers.openlibrary.org/b/id/14348537-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/prideprejudice0000unse_r8e0/page/12/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/8463846-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/b/id/8775559-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/littlewomenormeg00alcoiala/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/8315603-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/b/id/8392798-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/b/id/671290-M.jpg",
      "link":""
    },{
      "img":"https://covers.openlibrary.org/b/id/14421833-M.jpg",
      "link":""
    },
   ]
  return (
    <div className='page'>
       <div className='pageHeader'>
       <div className='headerContenar'>
    <h1>Trending book</h1>
    </div>
      
        </div> 
        <div className='pageContenar'>
           <div className='books'>
           <div className='addButton'>
          <Link to='/addbook'><i class="bi bi-plus-lg"></i></Link>
          </div>
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

export default TrendingBook
