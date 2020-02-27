import React, { useEffect, useState, ChangeEvent, FormEvent, useRef} from 'react';
import { Form } from '../../style/styled';
import { connect } from 'react-redux';
import {stateData, dataType} from '../../store/reducers/authentication'
import axios from 'axios'




interface AdminForm{
    category:string; 
    type:string;
    itemname:string;
    price:string;
    description:string;
    image:string
    quantity:number;
}

const initialForm:AdminForm = {
    category:"",
    type:"",
    itemname:"",
    price:"",
    image:"",
    description:"",
    quantity:0
}

const Admin: React.FC<{auth:any}> = ({auth}) => {   
    const [form, setForm] = useState<AdminForm>(initialForm)
    const image  = useRef<HTMLInputElement>(null)
    const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>{
        e?.preventDefault();  
        setForm({...form,[e.currentTarget?.id]:e.target?.value})
    }

    const SubmitItem = (e:FormEvent)=>{
        e.preventDefault();
        console.log(auth.token) 
        const data = new FormData(); 
        const name = (form.itemname + Date.now()+".jpg")
        setForm({...form,image:name})
        const img = image.current?.files?.item(0) as Blob
        console.log(img)
        // data.append('file',img as File); 
        data.set('file',img as File,name)
        console.log(data)
        axios.post('http://localhost:3000/upload',data,{

        })
        // .then(_=>{
        //     axios.post('http://localhost:3000/items',form,{
        //         headers:{
        //             'authorization':`Bearer ${auth?.token}`, 
        //             'content-type':'application/json' 
        //         }
        //     })
        // })

    }

  return (
    <Form style={{top:"5vh"}} > 
        <h2 style={{textAlign:"center"}}>Hello Admin, Please Fill in the Form to upload an Item</h2>
        <label> Item Name
            <input type='text' id='name' placeholder='item name' value={form.itemname} onChange={handleChange}/>
        </label>
        <label> Price
            <input type='text' id='price' placeholder='price e.g, 6000' value={form.price} onChange={handleChange}/>
        </label>
        <label> Select Category
            <select value={form.category} id='category' onChange={handleChange}>
                <option value='women'>Women Wears</option>
                <option value='men'>Men Wears</option>
                <option value='accessories'>Accessories</option>
                <option value='womenfoot'>Women Foot Wear</option>
                <option value='menfoot'>Men Foot Wear</option>
            </select>
        </label>
        <label> Select Type
            <select value={form.type} id='type' onChange={handleChange}>
        {form.category === "" && <option>you have to select category first</option> }
        {form.category === 'women' && 
            <>
                <option value='women'>Top</option>
                <option value='men'>Gowns</option>
                <option value='accessories'>Skirts</option>
                <option value='womenfoot'>Style</option>
                </>
        }
        {form.category === 'men' && 
            <>
                <option value='shirt'>Shirts</option>
                <option value='trousers'>Trousers</option>
                <option value='short'>Short</option>
                <option value='style'>Style</option>
            </>
        }
        {form.category === 'accessories' && 
            <>
                <option value='bangles'>Bangles</option>
                <option value='necklace'>Necklace</option>
                <option value='waistbid'>Waist bids</option>
                <option value='ring'>Rings</option>
            </>
        }
        {form.category === 'womenfoot' &&
            <>
                <option value='sandal'>Sandal</option>
                <option value='shoe'>Shoe</option>
                <option value='hill'>Hills</option>
            </>
        }
        {form.category === 'menfoot' &&
            <>
                <option value='sandal'>Sandals</option>
                <option value='shoe'>Shoes</option>
            </> 
            }
            </select> 
        </label>
        <label> Quantity
            <input type='text' placeholder='Quantity' value={form.quantity} id='quantity' onChange={handleChange}/>
        </label>        
        <label> Image
            <input type='file' id='image' name='file' placeholder='Upload view image' ref={image} /> 
            {/* onChange={e=>setForm({...form,image:e.target?.files?.item(0) as File})} */}
        </label>         
        <label> Description
            <textarea id='description' value={form.description} placeholder='price e.g, 6000' onChange={handleChange}> 
                </textarea>
        </label>
        <button onClick={SubmitItem}>Add Item</button>
    </Form> 
  );
}
const mapStateToProps  = ({authenticate}:{authenticate:stateData})=>({
    auth:authenticate.data?.auth
})
export default connect(mapStateToProps)(Admin)   