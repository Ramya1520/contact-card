import React from 'react';
import{Link,useLocation} from 'react-router-dom';
let EditContact=()=>{
    const location = useLocation()
    
    return(
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
