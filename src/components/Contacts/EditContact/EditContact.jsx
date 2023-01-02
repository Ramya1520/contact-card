import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';


let EditContact = () => {

    const location = useLocation()


    const contact = useContext(ContactContext)
    console.log("contact1", contact.list)
    console.log("contact22", contact.updateState)

    const index = location.state.id;
    const editlist = contact.list[index]
    const [updateState, setUpdateState] = useState(editlist);



    const update = (updateState) => {
        console.log("editlsit", updateState)
        contact.list.push(updateState)
        console.log("contact after push,", contact.list)

        contact.setList([
            ...contact.list.slice(0, index),
            ...contact.list.slice(index + 1, contact.list.length)
        ]);
    }

    console.log("edit", index)
    console.log(location)
    console.log("editlist", editlist)
    console.log(contact.list[0].name, "hai")

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
