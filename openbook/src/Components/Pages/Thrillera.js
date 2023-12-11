import React from 'react'
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'

const Thrillera = () => {
  const Books=[
    {
      "img":"https://covers.openlibrary.org/b/id/8775559-M.jpg",
      "link":"https://archive.org/details/littlewomenormeg00alcoiala/page/6/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/13322313-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/greatexpectatio00dick/page/4/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/8153054-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/b/id/14428305-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/elingeniosohi00cerv/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/552443-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/wonderfulwizardo00baumiala/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/6717853-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater"
    },{
      "img":"https://covers.openlibrary.org/b/id/12374726-M.jpg",
      "link":""
    },{
      "img":"https://covers.openlibrary.org/b/id/872432-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27",
      "link":"https://archive.org/details/macbethtraductio06shak/mode/2up?ref=ol&view=theater"
    },
   ]

  return (
    <div className='page'>
    <div className='pageHeader'>
    <div className='headerContenar'>
    <h1>History book</h1>
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

export default Thrillera
