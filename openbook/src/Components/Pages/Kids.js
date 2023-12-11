import React from 'react'
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'

const Kids = () => {
  const Books=[
    {
      "img":"https://covers.openlibrary.org/w/id/1738685-M.jpg",
      "link":"https://archive.org/details/morebears0000nesb/page/n1/mode/2up?view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/w/id/10311413-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/9784016-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/8751865-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/7441737-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/890617-M.jpg",
      "link":""
    },{
      "img":"https://covers.openlibrary.org/w/id/8762184-M.jpg",
      "link":""
    },
   ]
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

export default Kids
