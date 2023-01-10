import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { collection, doc, deleteDoc, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useForm } from 'react-hook-form';

const ContactList = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors)
    const contact = useContext(ContactContext)
    const { list, setList } = useContext(ContactContext)
    const { updateState, setUpdateState } = useContext(ContactContext)
    const [searchbar, setSearchbar] = useState(contact.list)
    const useCollectionRef = collection(db, 'list');
    const { listVal, setListVal } = useContext(ContactContext)

    const edit = (age, index) => {
        setUpdateState(contact.list[index])
    }

    const Update = async () => {
        if (updateState.name && updateState.mobile && updateState.email) {
            await addDoc(useCollectionRef, updateState);
            setUpdateState({ name: "", mobile: "", photourl: "", email: "", company: "", title: "" })
            Delete(updateState.id)
        }
    }

    let Add = async () => {
        if (listVal.mobile && listVal.name && listVal.email) {
            let data = await addDoc(useCollectionRef, listVal)
            console.log("data", data)
            console.log("listVal", listVal)
            setListVal({ name: "", mobile: "", photourl: "", email: "", company: "", title: "" })
        }
        setListVal({ name: "", mobile: "", photourl: "", email: "", company: "", title: "" })
    }

    const View = (element, index) => {
        setUpdateState(contact.list[index])
    }

    const Delete = async (listId) => {
        const listDoc = doc(db, 'list', listId)
        await deleteDoc(listDoc)
    }

    useEffect(() => {
        const snapShot = onSnapshot(useCollectionRef, (snapShotParam => {
            setList(snapShotParam.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            setSearchbar(list)
        }))
        return () => snapShot();
    }, [(list.length)]);

    const filterNames = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames = contact.list.filter(searchbar => searchbar.name.toLowerCase().includes(search))
        console.log("after===========", searchbar)
        setSearchbar(filteredNames)
    }
    return (
        <React.Fragment>

            <section className="container contact-search p-3">
                <div className="Container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="container h3 fw-bold">Contact manager
                                    <button className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdropnew">
                                        <i className='fa fa-plus-circle me-2' />New
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* New contact */}
                        <div className="modal fade" id="staticBackdropnew" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">New Contact</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit((data) => {
                                            console.log(data)
                                        })}>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" className="form-control" placeholder="Name" name="name" {...register('name', { required: "*This field is required" })} value={listVal.name} onChange={((e) => setListVal({ ...listVal, name: e.target.value }))} />
                                                    {errors?.name && <p className='text-danger'> {errors?.name.message} </p>}
                                                </div>
                                                <div class="col">

                                                    <input type="text" className="form-control" placeholder="Photo Url" name="photourl" value={listVal.photourl} onChange={((e) => setListVal({ ...listVal, photourl: e.target.value }))} />

                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="tel" id="phone" maxLength="10" minLength="9" className="form-control" placeholder="Mobile" name="mobile" {...register('mobile', { required: "*This field is required" })} value={listVal.mobile} onChange={((e) => setListVal({ ...listVal, mobile: e.target.value }))} />
                                                    {errors?.mobile && <p className='text-danger'> {errors?.mobile.message} </p>}
                                                </div>
                                                <div class="col">
                                                    <input type="email" className="form-control" placeholder="Email" name="email" {...register('email', { required: "*This field is required" })} value={listVal.email} onChange={((e) => setListVal({ ...listVal, email: e.target.value }))} />
                                                    {errors?.email && <p className='text-danger'> {errors?.email.message} </p>}
                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" className="form-control" placeholder="Company" name="company" value={listVal.company} onChange={((e) => setListVal({ ...listVal, company: e.target.value }))} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" className="form-control" placeholder="Title" name="title" value={listVal.title} onChange={((e) => setListVal({ ...listVal, title: e.target.value }))} />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="text" className="btn btn-primary" onClick={() => { Add(listVal) }}>Save</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //Edit page */}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Edit Contact</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit((data) => {
                                            console.log(data)
                                        })}>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Name" value={updateState.name} onChange={((e) => setUpdateState({ ...updateState, name: e.target.value }))} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Photo Url" value={updateState.photourl} onChange={((e) => setUpdateState({ ...updateState, photourl: e.target.value }))} />
                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Mobile" value={updateState.mobile} onChange={((e) => setUpdateState({ ...updateState, mobile: e.target.value }))} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Email" value={updateState.email} onChange={((e) => setUpdateState({ ...updateState, email: e.target.value }))} />
                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Company" value={updateState.company} onChange={((e) => setUpdateState({ ...updateState, company: e.target.value }))} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Title" value={updateState.title} onChange={((e) => setUpdateState({ ...updateState, title: e.target.value }))} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => { Update(updateState) }}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //view page */}
                        <div className="modal fade" id="staticBackdrops" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">View Contact</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Name" value={updateState.name} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Photo Url" value={updateState.photourl} />
                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Mobile" value={updateState.mobile} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Email" value={updateState.email} />
                                                </div>
                                            </div>
                                            <div class="row my-3">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Company" value={updateState.company} />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Title" value={updateState.title} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className='row'>
                                <div className='col'>
                                    <div className="mb-2">
                                        <input type="type" className='form-control btn btn-outline-dark my-2' onChange={(e) => filterNames(e)} placeholder="Search Name" />
                                    </div>
                                </div>
                                <div className='col'>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-list'>
                <div>
                    <div>
                        <div>
                            {
                                searchbar.map((element, index) => {
                                    return (
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-5'>
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <div className="Frow align-items-center d-flex justify-content-around">

                                                                <div className='col-md-2'>
                                                                    <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" className='img-fluid'></img>
                                                                </div>
                                                                <div className='col-md-7'>
                                                                    <ul className='list-group'>

                                                                        <li className='list-group-item listgroup-item-action fw-bolder'>
                                                                            Name:<span className='fw-light'>{element.name}</span>
                                                                        </li>

                                                                        <li className='list-group-item listgroup-item-action fw-bolder'>
                                                                            Mobile:<span className='fw-light'>{element.mobile}</span>
                                                                        </li>

                                                                        <li className='list-group-item listgroup-item-action fw-bolder'>
                                                                            Email:<span className='fw-light'>{element.email}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className='col-md-1 d-flex flex-column align-items-center'>
                                                                    <button type="button" className="btn btn-primary my-1" data-bs-toggle="modal" data-bs-target="#staticBackdrops" onClick={() => { View(element.id, index) }}><i className="fa fa-eye my-1" /></button>

                                                                    <button type="button" className="btn btn-dark my-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { edit(element.id, index) }} ><i className="fa fa-pen my-1" /></button>
                                                                    <button className="btn btn-danger my-1" onClick={() => { Delete(element.id) }}>
                                                                        <i className='fa fa-trash' /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
};
export default ContactList;