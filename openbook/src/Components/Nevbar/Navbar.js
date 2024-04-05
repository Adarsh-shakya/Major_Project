// import React ,{ useEffect,useState,useRef }from 'react';
// import './Navbar.css'
// import { Outlet, Link,useNavigate } from 'react-router-dom'; 
// import {useSelector,useDispatch} from 'react-redux'
// import  setCurrentUser  from '../../actions/currentUser'
// import {jwtDecode }from 'jwt-decode'
// import Avatar from '../Avatar/Avatar';

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

 
//   const dispatch=useDispatch()
//   var User = useSelector((state) => (state.currentUserReducer))
//   const navigate = useNavigate();


//    const handleLogout = () => {
//      dispatch({ type: 'LOGOUT' });
//     navigate('/')
//     dispatch(setCurrentUser(null))
// }


  
// useEffect(() => {
//   console.log(User);
//   const token = User?.token;
//   if (token) {
//     const decodedToken = jwtDecode(token);
//     if (decodedToken.exp * 1000 < new Date().getTime()) {
//       handleLogout();
//     }
//   }
//   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
// }, [User, handleLogout, dispatch]);

// useEffect(() => {
//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, []);
//   return (
//       <>
//     <nav className="navbar">
//       <div className="container">
    
//         <Link to="/" className="logo">
//         <img src="https://th.bing.com/th/id/OIP.Vd4JHVC-H25ltfHhThg2BwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" />
//         </Link>
//         <ul className='nav-links'>
//         <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/">Help</Link></li>
//           <li>
                 
//           <div className="dropdown">
//       <button onClick={toggleDropdown} className="dropbtn">
//         Category <i class="bi bi-chevron-down"></i>
//       </button>
//       {isOpen && (
//         <ul className="dropdown-content">
//          <li><Link to="/trending">Trending</Link></li>
//          <li><Link to="/classic">Classic</Link></li>
//          <li><Link to="/kids">Kids</Link></li>
//          <li><Link to="/thrillers">History</Link></li>
//          <li><Link to="/textbook">TextBook</Link></li> 
          
//         </ul>
//       )}
//     </div>
//           </li>
//         </ul>
        
       
//         <ul className="nav-links">
//           { User==null ?
//              <Link to='/Auth' className='nav-item nav-link'>Log In</Link> :
//                <>
//                    <Avatar  backgroundColor='rgb(2, 56, 172)' px='7px' py='7px' borderRadius='50%' color='white' ><Link to='/' style={{ color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> <li/>
//                     <button className='nav-item nav-link' onClick={handleLogout} style={{color:'white'}}  >Log out</button>
//                 </>
//              }
//         </ul>
//       </div>
//     </nav>
//     <Outlet/>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import setCurrentUser from '../../actions/currentUser';
import { jwtDecode } from 'jwt-decode';
import Avatar from '../Avatar/Avatar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setCurrentUser(null));
  };

  // useEffect(() => {
  //   const token = User?.token;
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) {
  //       handleLogout();
  //     }
  //   }
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  // }, [User, handleLogout, dispatch]);

  useEffect(() => {
    const token = User?.token;
    if (token && !User) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      } else {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
      }
    }
  }, [User, handleLogout, dispatch]);
  

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src="https://th.bing.com/th/id/OIP.Vd4JHVC-H25ltfHhThg2BwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" />
          </Link>
          <ul className='nav-links'>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           <li><Link to="/">Help</Link></li> 
            <li>
              <div className="dropdown" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="dropbtn">
                  Category <i className="bi bi-chevron-down"></i>
                </button>
                {isOpen && (
                  <ul className="dropdown-content">
                    <li><Link to="/trending" onClick={() => setIsOpen(false)}>Trending</Link></li>
                    <li><Link to="/classic" onClick={() => setIsOpen(false)}>Classic</Link></li>
                    <li><Link to="/kids" onClick={() => setIsOpen(false)}>Kids</Link></li>
                    <li><Link to="/thrillers" onClick={() => setIsOpen(false)}>History</Link></li>
                    <li><Link to="/textbook" onClick={() => setIsOpen(false)}>Textbook</Link></li>
                  
                    
                  </ul>
                )}
              </div>
            </li>
          </ul>

          <ul className="nav-links">
          { User==null ?
              <Link to='/Auth' className='nav-item nav-link'>Log In</Link> :
                <>
                    <Avatar  backgroundColor='rgb(2, 56, 172)' px='7px' py='7px' borderRadius='50%' color='white' ><Link to='/' style={{ color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> <li/>
                     <button className='nav-item nav-link' onClick={handleLogout} style={{color:'white'}}  >Log out</button>
                 </>
              }
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
