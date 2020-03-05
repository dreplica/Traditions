import React,{useState,useEffect} from 'react';
import { Switch,Route, useParams} from 'react-router-dom';
import Sales from '../categories/allCategories';
import { RightComponent } from '../../../style/categories';


const SaleRoute: React.FC<{}> = ({}) => {
  const  [url, seturl] = useState("")
  useEffect(() => {
    const path = (window.location.href).split("/")
    const category = path[path.length-3]  as string
    const type = path[path.length-2]  as string
    console.log(category)
    console.log(path)
    seturl(`http://localhost:3000/items/${category}/${type}`)
    console.log(typeof window.location.href)
  }, [useParams()])

  return (
    <RightComponent>
        <Switch>
                <Route path='/home/sale/women/:type'>
                    <Sales url={url}/>
                </Route>
                <Route path='/home/sale/men/:type'>
                  <Sales url={url}/>
                </Route>
                <Route path='/home/sale/access/:type'>
                  <Sales url={url}/>
                </Route> 
                <Route path='/home/sale/wfoot/:type'>
                  <Sales url={url}/>
                </Route>
                <Route path='/home/sale/mfoot/:type'>
                  <Sales url={url}/>
                </Route>
        </Switch>
    </RightComponent>
  );
}


export default SaleRoute