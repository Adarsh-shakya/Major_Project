import React from 'react'
import './Home.css'
import BookSlider from '../../BookSlider/BookSlider'



const Home = () => {

  const BooksData=[{
    "name":"Trending Book",
    "path":"trending",
    "Books":[
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
      }
    ]
  },
  {
     "name":"Classic Book",
     "path":"/classic",
     "Books":[
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
  },
  {
    "name":"Kids Book",
    "path":"/Kids",
    "Books":[
      {
        "img":"https://covers.openlibrary.org/w/id/1738685-M.jpg",
        "link":""
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
      }
    ]
 },
 {
  "name":"History Books",
  "path":"/thrillers",
  "Books":[
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
},
{
  "name":"TextBook",
  "path":"/textbook",
  "Books":[
    {
      "img":"https://covers.openlibrary.org/w/id/12903218-M.jpg",
      "link":""
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
      "link":"/"
    },{
      "img":"https://covers.openlibrary.org/w/id/3701205-M.jpg",
      "link":"/"
    }
  ]
}
]
  
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
      
    </div>
  )
}

export default Home
