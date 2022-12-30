import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';

let ContactList = () => {

    const contact = useContext(ContactContext)
    console.log("update2", contact.updateState)
    console.log("contact", contact.list)
    const navigate = useNavigate()

    const view = (item, index) => {
        console.log("in view function")
        console.log(index)
        navigate('/contacts/list/view', { state: { id: index } })
    }

    const edit = (item, index) => {
        navigate('/contacts/edit/:contactId', { state: { id: index } })
    }

    function Delete(mobile) {
        console.log("mobile", mobile)
        const newList = contact.list.filter((li) => (li.mobile !== mobile))
        console.log("newlist", newList)
        contact.setList(newList)
    }
    console.log("before", contact.list)
    const filterNames = e => {
        console.log('******')
        const search = e.target.value.toLowerCase()
        console.log(search, "search")

        const filteredNames = contact.list.filter((con) => con.name.toLowerCase().includes(search))
        console.log("after", contact.list)
        console.log(filteredNames, "filteredNames")
        contact.setList(filteredNames)
    }

    return (
        <React.Fragment>

            <section className="container contact-search p-3">
                <div className="Container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="container h3 fw-bold">Contact manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2" >
                                        <i className='fa fa-plus-circle me-2' />New
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <form className='row'>
                                <div className='col'>
                                    <div className="mb-2">
                                        <input type="text" className='form-control btn btn-outline-dark my-2' onChange={(e) => filterNames(e)} placeholder="Search Name" />
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='mb-2'>
                                        <input type="button" className="btn btn-success my-2" value='Search'></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {console.log(contact.list, "same contact")}
            <section className='contact-list'>
                {
                    contact?.list?.map((element, index) => {

                        if (element !== "index") {
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
                                                                    Name:<span className='fw-light'>{element?.name}</span>
                                                                </li>

                                                                <li className='list-group-item listgroup-item-action fw-bolder'>
                                                                    Mobile:<span className='fw-light'>{element?.mobile}</span>
                                                                </li>

                                                                <li className='list-group-item listgroup-item-action fw-bolder'>
                                                                    Email:<span className='fw-light'>{element?.email}</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className='col-md-1 d-flex flex-column align-items-center'>


                                                            <button type="button" className="btn btn-primary my-1" onClick={() => { view(element, index) }}><i className="fa fa-eye my-1" /></button>

                                                            <button type="button" className="btn btn-dark my-1" onClick={() => { edit(element, index) }} ><i className="fa fa-pen my-1" /></button>


                                                            <button className="btn btn-danger my-1" onClick={() => Delete(element.mobile)}>
                                                                <i className='fa fa-trash' />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            )
                        }

                    }
                    )
                }
            </section>

        </React.Fragment>
    )
};
export default ContactList;