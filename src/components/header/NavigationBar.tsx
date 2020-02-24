import React, { MouseEvent, useEffect } from 'react';
import { Nav } from '../../style/navigation';
import { connect } from 'react-redux';
import { menuView } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';

const Navigation:React.FC<{menu:string,view:(args:string)=>void}> = ({menu,view})=>{
  // const [viewing, setView] = useState(menu);
  useEffect(() => {
    window.onresize = (e:Event)=>{
      e.preventDefault(); 
      (window.innerWidth <= 816) ? view('none') : view('block')

      console.log(window.innerWidth)
    }
  }, [menu,view])
  return (
    <>
    <Nav style={{display:menu}}> 
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Categories</a></li>
            <li><a href='/'>Top Sales</a></li>
            <li><a href='/'>New Sales</a></li>
            <li><a href='/'>Cart<sup>10</sup></a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </Nav>
    </>
  );
}


const mapStateToProps = ({EffectReducers}:{EffectReducers:Modal})=>({
  menu:EffectReducers.menu
})
export default connect(mapStateToProps,{view:menuView})(Navigation)
