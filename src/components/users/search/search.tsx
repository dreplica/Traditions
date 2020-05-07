import React,{useState, ChangeEvent, useEffect} from 'react';
import { Searcher } from '../../../style/navigation';
import { FiSearch } from 'react-icons/fi';
import Axios from 'axios';
import { objectData } from '../../../store/reducers/items';
import { connect } from 'react-redux';
import { stateData } from '../../../store/reducers/authentication';
import { List } from './searchstyle';
import { Link } from 'react-router-dom';

const Search:React.FC<{auth:objectData}> = ({auth}) =>{
  const [search, setSearch] = useState("")
  const [data, setdata] = useState<Array<{[key:string]:string}>>([])
  useEffect(() => {
    const val = new RegExp(search,'ig');
      Axios.get(`http://localhost:3000/search/${search.toLowerCase()}`,{
        headers:{
          'authorization':`Bearer ${auth?.token}`  
        }  
      })
        .then(res=>{
          setdata(res.data?.search
              .filter((item:objectData,index:number)=>item.itemname.match(val)))
        })
  }, [setdata,setSearch,auth,search]) 

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    if(e.currentTarget?.value === ""){
      setSearch("") 
      setdata([]) 
    }
    setSearch(e.currentTarget?.value)
  }

  return (
    <>
    <Searcher>
        <input type='search' placeholder='search items' value={search} onChange={handleSearch}/>
        <button> <FiSearch/> </button> 
    </Searcher>
    <List>
      {data.map((item,index)=><li key={index}><Link to={`/search/${item.id}`}>{item.itemname}</Link></li>)}
    </List> 
    </>
  );
}

const mapStateToProps = ({authenticate}:{authenticate:stateData}) =>({
auth:authenticate.data?.auth as objectData
})


export default connect(mapStateToProps)(Search);