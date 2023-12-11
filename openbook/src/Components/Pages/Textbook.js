import React from 'react'
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'

const Textbook = () => {
  const Books=[
    {
      "img":"https://covers.openlibrary.org/w/id/12903218-M.jpg",
      "link":"https://archive.org/details/whitemollyork00pack/page/n9/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/w/id/14431210-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/13103292-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/11640288-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/14360778-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/w/id/363906-M.jpg",
      "link":""
    },{
      "img":"https://covers.openlibrary.org/w/id/3701205-M.jpg",
      "link":""
    },
   ]

  return (
    <div className='page'>
    <div className='pageHeader'>
    <div className='headerContenar'>
    <h1> Textbook</h1>
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

export default Textbook
