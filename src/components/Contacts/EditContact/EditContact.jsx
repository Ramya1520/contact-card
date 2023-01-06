import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { updateDoc } from 'firebase/firestore';
import { collection, doc,deleteDoc, addDoc,getDocs } from 'firebase/firestore';


import { db } from '../../../firebase';

let EditContact = () => {
    const { list, setList } = useContext(ContactContext)
    const location = useLocation()
    const contact = useContext(ContactContext)
    const index = location.state.id;
    const editlist = contact.list[index]
    const [updateState, setUpdateState] = useState(editlist);
    console.log("updatestate",updateState)
    const useCollectionRef = collection(db, 'list');


    // const update = async(listId,updateState) => { 
        // const listDoc=doc(db,'list',listId);
        // const newlist=(updateState)
        // await updateDoc(listDoc,newlist)
        // contact.list.push(updateState)
       

        // contact.setList([
        //     ...contact.list.slice(0, index),
        //     ...contact.list.slice(index + 1, contact.list.length)
        // ]);
    // // }
    // const update1=async(userId,updateDetails)=>{}
        
        
        
        
    const update =async (ak,listId) => { 
            const listDoc=doc(db,'list',listId); 
          
            const newval={name:ak}
          
            console.log("*********")
            await updateDoc(listDoc,newval)
        
   
        // contact.setList([
        //     ...contact.list.slice(0, index),
        //     ...contact.list.slice(index + 1, contact.list.length)

        // ]);
       

    }
 

    return (
        <React.Fragment>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className="fw-bold">Edit Contact</p>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type="text" value={updateState.name} onChange={((e) => setUpdateState({ ...updateState, name: e.target.value }))} className='form-control' placeholder='Name' />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={updateState.photourl} onChange={((e) => setUpdateState({ ...updateState, photourl: e.target.value }))} className='form-control' placeholder='Photo Url'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="number" value={updateState.mobile} onChange={((e) => setUpdateState({ ...updateState, mobile: e.target.value }))} className='form-control' placeholder='Mobile'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={updateState.email} onChange={((e) => setUpdateState({ ...updateState, email: e.target.value }))} className='form-control' placeholder='Email'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={updateState.company} onChange={((e) => setUpdateState({ ...updateState, company: e.target.value }))} className='form-control' placeholder='Company'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={updateState.title} onChange={((e) => setUpdateState({ ...updateState, title: e.target.value }))} className='form-control' placeholder='Title'></input>
                                </div>
                                <div>
                                </div>

                                <div>

                                </div>
                                <div className='mb-2'>
                                    <Link to={'/contacts/list'} type="button" className='btn btn-primary ms-2' value="update" onClick={() => { update(updateState) }}>Update</Link>
                                    {/* <Link to={'/contacts/list'} className="btn btn-danger ms-2">Cancel</Link> */}
                                </div>
                            </form>
                        </div>
                        <div className='col-md-2'>
                            <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" className='img-fluid'></img>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
};
export default EditContact;
