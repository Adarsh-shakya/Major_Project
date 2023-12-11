import React ,{ useEffect }from 'react';
import './Navbar.css'
import { Outlet, Link,useNavigate } from 'react-router-dom'; 
import {useSelector,useDispatch} from 'react-redux'
import  setCurrentUser  from '../../actions/currentUser'
import {jwtDecode }from 'jwt-decode'
import Avatar from '../Avatar/Avatar';

const Navbar = () => {

 
  const dispatch=useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();


   const handleLogout = () => {
     dispatch({ type: 'LOGOUT' });
    navigate('/')
    dispatch(setCurrentUser(null))
}

useEffect(()=>{
  console.log(User);
    const token = User?.token
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout()
        }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])
  
  return (
      <>
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
        <img src="https://th.bing.com/th/id/OIP.Vd4JHVC-H25ltfHhThg2BwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="trending">Trending</Link></li>
          <li><Link to="/classic">Classic</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/thrillers">History</Link></li>
          <li><Link to="/textbook">Textbook</Link></li>
          { User==null ?
             <Link to='/Auth' className='nav-item nav-link'>Log In</Link> :
               <>
                   <Avatar backgroundColor='#009dff' px='7px' py='7px' borderRadius='50%' color='white' ><Link to='/' style={{ color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> <li/>
                    <button className='nav-item nav-link' onClick={handleLogout} style={{color:'white'}}  >Log out</button>
                </>
             }
        </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
