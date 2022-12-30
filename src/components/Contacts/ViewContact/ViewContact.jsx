import { useContext } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import '../../../App.css'
import { ContactContext } from '../../../context/ContactContext';
const ViewContact = () => {
    const location = useLocation()

    console.log("location of view", location)
    const contact = useContext(ContactContext)

    const index = location.state.id;
    const viewlist = contact.list[index]

    return (
        <>
            {console.log(viewlist)}
            <section className='view-contacti-intro p-3'>
                <div className='container'>
                    <div className="row">
                        <div className='col'>
                            <p className="h3 text warning fw-bold">Views contact</p>
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
                    <ul className='list-group col-md-4 d-flex flex-column  '>

                        <li className='list-group-item listgroup-item-action'>
                            Name:<span className='fw-bold'>{viewlist?.name}</span>
                        </li>

                        <li className='list-group-item listgroup-item-action'>
                            Mobile:<span className='fw-bold'>{viewlist?.mobile}</span>
                        </li>

                        <li className='list-group-item listgroup-item-action'>
                            Email:<span className='fw-bold'>{viewlist?.email}</span>
                        </li>

                        <li className='list-group-item listgroup-item-action'>
                            Company:<span className='fw-bold'>{viewlist?.company}</span>
                        </li>

                        <li className='list-group-item listgroup-item-action'>
                            Title:<span className='fw-bold'>{viewlist?.title}</span>
                        </li>
                    </ul>
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
        </>
    )
};
export default ViewContact;