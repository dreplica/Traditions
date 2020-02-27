import React, { MouseEvent, useEffect } from 'react';
import { Nav } from '../../style/navigation';
import { connect } from 'react-redux';
import { menuView } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaStoreAlt, FaRegEnvelope, FaSignOutAlt } from 'react-icons/fa'; 

const Navigation:React.FC<{menu:string,view:(args:string)=>void}> = ({menu,view})=>{
  // const [viewing, setView] = useState(menu);
  const auth = true;
  useEffect(() => {
    window.onresize = (e:Event)=>{
      e.preventDefault(); 
      (window.innerWidth <= 816) ? view('none') : view('block')

      console.log(window.innerWidth)
    }
  }, [menu,view])
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
            <li><Link to='/home/topsales'>Top Sales</Link></li> 
            <li><Link to='/home/newsales'>New Sales</Link></li>  
            <li><Link to='/home/cart'><FiShoppingCart/><span> Cart<sup>10</sup></span></Link></li>
            <li><Link to='/'><FaRegEnvelope/><span>Contact</span></Link></li>
            <li><Link to='/'><FaSignOutAlt/><span>Logout</span></Link></li> 
        </ul>
    </Nav>}  
    </>
  );
}


const mapStateToProps = ({EffectReducers}:{EffectReducers:Modal})=>({
  menu:EffectReducers.menu
})
export default connect(mapStateToProps,{view:menuView})(Navigation)
