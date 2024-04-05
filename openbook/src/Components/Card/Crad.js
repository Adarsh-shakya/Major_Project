import React from 'react';
import './Card.css';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function Card({data}) {

  var User = useSelector((state) => (state.currentUserReducer))

 const hendelClaick=(e)=>{
  e.preventDefault();
  alert("Login to Read!");
 }
  return (
    <div className='card'>
      <div className='img'>
     <img src={data.img} alt="    " />
        
      </div>
      <div className='CardButton'>
        
       {
       User?
       data.link ? ( <Link to={`/viewer/${encodeURIComponent(data.link)}`}>Read</Link> ) : 
       ( <span>Not Available</span>):( <button onClick={hendelClaick}>Read</button>)

      }  
       
        
      </div>
    </div>
  );
}

export default Card;
