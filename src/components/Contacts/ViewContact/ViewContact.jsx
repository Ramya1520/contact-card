import React from 'react';
import { Link } from 'react-router-dom';
let ViewContact=()=>{
    return(
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
                            <div className="col-md-4"></div>
                            {/* <div className='col-md-2 '>
                                <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" className='img-fluid'></img>
                            </div> */}
                            <div className='col-md-8'></div>
                            </div>
                            
                            <div className='col-md-7'>
                                            <ul className='list-group'>

                                                <li className='list-group-item listgroup-item-action'>
                                                    Name:<span className='fw-bold'>Ramya</span>
                                                </li>

                                                <li className='list-group-item listgroup-item-action'>
                                                    Mobile:<span className='fw-bold'>89998889988</span>
                                                </li>

                                                <li className='list-group-item listgroup-item-action'>
                                                    Email:<span className='fw-bold'>Ramya123@gmail.com</span>
                                                </li>
                                            </ul>
                                      </div>
                    <div className='row'>
                        <div className='col'>
                            
                            <Link to={'/contacts/list'} className='btn btn-warning'>back</Link>
                        </div>
                    </div>
                    </div>
                </section>
             </React.Fragment>
    )
};
export default ViewContact;