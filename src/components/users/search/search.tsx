import React,{useState, ChangeEvent, useEffect} from 'react';
import { Searcher } from '../../../style/navigation';
import { FiSearch } from 'react-icons/fi';
import Axios from 'axios';
import { objectData } from '../../../store/reducers/items';
import { connect } from 'react-redux';
import { stateData } from '../../../store/reducers/authentication';

const Search:React.FC<{auth:objectData}> = ({auth}) =>{
  const [search, setSearch] = useState("")
  const [gottenSearch, setSearchGotten] = useState<Array<{[key:string]:string}>>([])
  const [data, setdata] = useState<Array<{[key:string]:string}>>([])
  useEffect(() => {
    const val = new RegExp(search,'ig');
      Axios.post(`http://localhost:3000/search/${search.toLowerCase()}`,{},{
        headers:{
          'authorization':`Bearer ${auth?.token}` 
        }  
      })
        .then(res=>{
          console.log(res.data)
          setdata(res.data?.search)
        }).then(_=>{
        console.log("this regex",val)
          const searchGotten = data.filter((item,index)=>item.itemname.match(val))
          setSearchGotten(searchGotten)
          console.log("gotten",searchGotten)
        })
  }, [setdata,setSearch,auth,search]) 
  const handleSearch = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    if(e.currentTarget?.value === ""){
      console.log("hello");
      setSearchGotten([])
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
    <ul>
      {gottenSearch.map((item,index)=><li id={item.id} key={index}>{item.itemname}</li>)}
    </ul>
    </>
  );
}

const mapStateToProps = ({authenticate}:{authenticate:stateData}) =>({
auth:authenticate.data?.auth as objectData
})


export default connect(mapStateToProps)(Search);