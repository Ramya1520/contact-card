import React from 'react';
import{Link} from 'react-router-dom';
let EditContact=()=>{
    return(
        <React.Fragment>
        <section className='add-contact p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p className="fw-bold">Edit Contact</p>
                        {/* <p className='fst-italic'>Edit Contact</p> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <form>
                            <div className='mb-2'>
                                <input type="text"  className='form-control' placeholder='Name'></input>
                            </div>
                            <div className='mb-2'>
                                <input type="text" className='form-control'  placeholder='Photo Url'></input>
                            </div>
                            <div className='mb-2'>
                                <input type="number" className='form-control' placeholder='Mobile'></input>
                            </div>
                            <div className='mb-2'>
                                <input type="email" className='form-control' placeholder='Email'></input>
                            </div>
                            <div className='mb-2'>
                                <input type="text" className='form-control' placeholder='Company'></input>
                            </div>
                            <div className='mb-2'>
                                <input type="text" className='form-control' placeholder='Title'></input>
                            </div>
                            <div>
                            <select className='form-control'>
                                <option value="">Select a Group</option>
                            </select>
                            </div>
                            <div className='mb-2'>
                                <input type="Submit" className='btn btn-primary ms-2' value="Update" ></input>
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
export default EditContact;