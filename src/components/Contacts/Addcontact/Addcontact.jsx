import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from '../../../context/ContactContext';
import { collection,addDoc } from 'firebase/firestore';

import {useState } from 'react';
import { db } from '../../../firebase';
export const useCollectionRef = collection(db, 'list');


const Addcontact = () => {
    const { list, setList } = useContext(ContactContext)
     const { listVal, setListVal } = useContext(ContactContext)

    let Add = async () => {
    //     let data = await addDoc(useCollectionRef, listVal)
    //     console.log("data", data)
    //     if (listVal.mobile) {
    //         console.log("listVal", listVal)
    //         setList([...list, listVal])
    //     }
    //     setListVal({ name: "", mobile: "", photourl: "", email: "", company: "", title: "" })
     }

    return (
        <React.Fragment>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className="fw-bold ">create contact</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type="text" className='form-control fw-bold ' placeholder='Name'></input>
                                </div>
                                {/* <div className='mb-2'>
                                    <input type="text" value={listVal.photourl} onChange={((e) => setListVal({ ...listVal, photourl: e.target.value }))} className='form-control fw-bold' placeholder='Photo Url'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={listVal.mobile} onChange={((e) => setListVal({ ...listVal, mobile: e.target.value }))} className='form-control fw-bold' placeholder='Mobile'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={listVal.email} onChange={((e) => setListVal({ ...listVal, email: e.target.value }))} className='form-control fw-bold' placeholder='Email'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={listVal.company} onChange={((e) => setListVal({ ...listVal, company: e.target.value }))} className='form-control fw-bold' placeholder='Company'></input>
                                </div>
                                <div className='mb-2'>
                                    <input type="text" value={listVal.title} onChange={((e) => setListVal({ ...listVal, title: e.target.value }))} className='form-control fw-bold' placeholder='Title'></input>
                                </div> */}
                                <div>
                                </div>
                                <div className='mb-2'>
                                    <button type="button" className='btn btn-success ms-2' value="Create" onClick={() => { Add() }}>Save</button>
                                    <Link to={'/contacts/list'} className="btn btn-danger ms-2">Cancel</Link>
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