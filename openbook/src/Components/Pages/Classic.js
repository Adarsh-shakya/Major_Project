import React from 'react'
import Card from '../Card/Crad'
import './Page.css'
import { Link} from 'react-router-dom'

const Classic = () => {
   
  const Books=[
    {
      "img":"https://covers.openlibrary.org/b/id/4339840-M.jpg",
      "link":"https://archive.org/details/teddysbutton0000unse/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/4481209-M.jpg",
      "link":"https://archive.org/details/cu31924011846825/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/5651246-M.jpg",
      "link":"https://archive.org/details/selectionsfromwr00landrich/page/n5/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/9269962-M.jpg",
      "link":""
    },
    {
      "img":"https://covers.openlibrary.org/b/id/5913760-M.jpg",
      "link":"https://archive.org/details/cihm_65288/page/n5/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/6150962-M.jpg",
      "link":"https://archive.org/details/derschwarzevorh00dbgoog/page/n1/mode/2up?ref=ol&view=theater"
    },
    {
      "img":"https://covers.openlibrary.org/b/id/578965-M.jpg",
      "link":"https://archive.org/details/kwaidanstories00hearrich?ref=ol&view=theater"
    },{
      "img":"https://covers.openlibrary.org/b/id/12784957-M.jpg",
      "link":""
    },{
      "img":"https://covers.openlibrary.org/b/id/4339840-M.jpg",
      "link":"https://archive.org/details/teddysbutton0000unse/mode/2up?ref=ol&view=theater"
    },
   ]

  return (
    <div className='page'>
    <div className='pageHeader'>
    <div className='headerContenar'>
    <h1>Classic book</h1>
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

export default Classic
