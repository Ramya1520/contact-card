import React, { useContext } from 'react';
import{Link} from 'react-router-dom';
import { useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';


const Addcontact=()=>{
    const [listVal,setListVal]=useState({
        name:'',
        mobile:'',
        photourl:'',
        email:'',
        company:'',
        title:''
    })
    const {list, setList} = useContext(ContactContext)  
    const Add=()=>{
        
        console.log("lv",listVal)
        setList([...list,listVal])
        console.log("list1:",list)
        setListVal({name:"",mobile:"",photourl:"",email:"",company:"",title:""})
    }
    return(
             <React.Fragment>
                <section className='add-contact p-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <p className="fw-bold ">create contact</p>
                                <p className='fst-italic'>create new contact</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <form>
                                    <div className='mb-2'>
                                        <input type="text" value={listVal.name} onChange={((e)=>setListVal({...listVal,name:e.target.value}))} className='form-control'  placeholder='Name'></input>
                                    </div>
                                    <div className='mb-2'>
                                        <input type="text" value={listVal.photourl} onChange={((e)=>setListVal({...listVal,photourl:e.target.value}))} className='form-control'  placeholder='Photo Url'></input>
                                    </div>
                                    <div className='mb-2'>
                                        <input type="number" value={listVal.mobile} onChange={((e)=>setListVal({...listVal,mobile:e.target.value}))} className='form-control' placeholder='Mobile'></input>
                                    </div>
                                    <div className='mb-2'>
                                        <input type="text" value={listVal.email} onChange={((e)=>setListVal({...listVal,email:e.target.value}))} className='form-control' placeholder='Email'></input>
                                    </div>
                                    <div className='mb-2'>
                                        <input type="text" value={listVal.company} onChange={((e)=>setListVal({...listVal,company:e.target.value}))} className='form-control' placeholder='Company'></input>
                                    </div>
                                    <div className='mb-2'>
                                        <input type="text" value={listVal.title} onChange={((e)=>setListVal({...listVal,title:e.target.value}))}className='form-control' placeholder='Title'></input>
                                    </div>
                                    <div>
                                    </div>
                                    <div className='mb-2'>
                                        <button  type="button"  className='btn btn-success ms-2' value="Create" onClick={()=>{Add()}}>Save</button>
                                        <Link to={'/contacts/list'}className="btn btn-danger ms-2">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </section>
                </React.Fragment>
    )
};
export default Addcontact;