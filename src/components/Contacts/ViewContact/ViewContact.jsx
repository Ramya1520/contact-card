import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css'
const ViewContact = () => {
    const location = useLocation()
    console.log(location.state)
    return (
        <React.Fragment>
            <section className='view-contacti-intro p-3'>
                <div className='container'>
                    <div className="row">
                        <div className='col'>
                            <p className="h3 text warning fw-bold">View contact</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='="view-contact mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-2">
                            <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" className='img-fluid'></img>
                        </div>
                        <div className='col-md-6'>
                        </div>
                    </div >

                    <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>

                    <div className='list-group col-md-4 d-flex flex-column  '>

                        <div className='list-group-item listgroup-item-action'>
                            Name:{location.state.name}<span className='fw-bold'></span>
                        </div>

                        <div className='list-group-item listgroup-item-action'>
                            Mobile:{location.state.mobile}<span className='fw-bold'></span>
                        </div>

                        <div className='list-group-item listgroup-item-action'>
                            Email:{location.state.email}<span className='fw-bold'></span>
                        </div>
                        <div className='list-group-item listgroup-item-action'>
                            Company{location.state.company}<span className='fw-bold'></span>
                        </div>
                        <div className='list-group-item listgroup-item-action'>
                            title:{location.state.title}<span className='fw-bold'></span>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>


                    </div>
                    <div className="myTable">
                    </div>
                    <div>

                    </div>

                </div>

            </section>
        </React.Fragment>
    )
};
export default ViewContact;