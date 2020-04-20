import React, { MouseEvent, useEffect } from 'react';
import { Nav } from '../../style/navigation';
import { connect } from 'react-redux';
import { menuView } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';
import { Link, useHistory } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaStoreAlt, FaRegEnvelope, FaSignOutAlt, FaTags, FaGlobeAfrica } from 'react-icons/fa'; 
import { itemState, objectData } from '../../store/reducers/items';
import { stateData } from '../../store/reducers/authentication';

interface Iprops{
  menu: string;
  auth: string;
  view: (args: string) => void;
  data: objectData[]
}
function  Navigation({menu,view,auth,data}:Iprops){
  // const [viewing, setView] = useState(menu);
  const history = useHistory();
  useEffect(() => {
    window.onresize = (e:Event)=>{
      e.preventDefault(); 
      (window.innerWidth <= 999) ? view('none') : view('block')
    }
  }, [menu,view,data,auth])

  const gotToLogin = (e:MouseEvent) =>{
    e.preventDefault();
    if (auth) {
        try {
          localStorage.removeItem('auth')
          history.push("/signin")
          
        } catch (error) {
          console.log(error.message)
        }
      }
  }

  return (
    <>
    {
      !auth && <Nav>
        <ul>
            <li><Link to='/home'><FaStoreAlt /> <span>Home</span></Link></li>
            <li><Link to='/signin'><span>Login</span></Link></li>
            <li><Link to='/signup'>Register</Link></li>
        </ul>
      </Nav>
    }
    {auth && <Nav style={{display:menu}}> 
        <ul>
            <li><Link to='/home'><FaStoreAlt /> <span>Home</span></Link></li>
            {/* <li style={{display:menu}}><Link to='/'><span>Categories</span></Link></li> */}
            <li><Link to='/home/topsales'><FaGlobeAfrica/> Top Sales</Link></li> 
            <li><Link to='/home/newsales'><FaTags/> New Sales</Link></li>   
            <li><Link to='/home/cart'><FiShoppingCart/><span> Cart<sup>{data.length}</sup></span></Link></li>
            <li><a href='#foot'><FaRegEnvelope/><span>Contact</span></a></li>
            <li><a href='/' onClick={gotToLogin}><FaSignOutAlt/><span>Logout</span></a></li> 
        </ul>
    </Nav>}  
    </>
  );
}

const mapStateToProps = ({EffectReducers,ItemsReducer,authenticate}:{authenticate:stateData; EffectReducers:Modal,ItemsReducer:itemState})=>({
  menu:EffectReducers.menu,
  auth:authenticate.data?.auth?.token as string,
  data:ItemsReducer.cart
})
export default connect(mapStateToProps,{view:menuView})(Navigation)
