import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
// import {CollectionRef} from 'app';
import { useCollectionRef } from './App';

function CreateUser(){
  const [name,setName]=useState('')
  const [age,setAge]=useState()

  const handlechange =(e) =>{
    if(e.target.name==="name"){
      setName(e.target.value)
    }
    else{
      setAge(Number(e.target.value));
    }
  }
  const handleSubmit=async()=>{
   const data=await addDoc(useCollectionRef,{name,age});
    console.log(data)

  }
  console.log("@@@@@@@@@")
  console.log(name)
    return (
      <section className='add-contact p-3'>
      <div className='container'>
          <div className='row'>
              <div className='col'>
                  <p className="fw-bold">User Details</p>
              </div>
          </div>
          <div className='row align-items-center'>
              <div className='col-md-4'>
                  <form>
                      <div className='mb-2'>
                          <input type="text" name='name' value={name.name} onChange={handlechange} className="form-control"  placeholder='Name' />
                      </div>
                      <div className='mb-2'>
                          <input type="text" name="age" value={age.age}  onChange={handlechange} className='form-control' placeholder='age'></input>
                      </div>
                      <div className='mb-2'>
                          <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                      </div>
                    
                   
                  </form>
              </div>
              
          </div>
      </div>

  </section>
      
    );
  }


export default CreateUser