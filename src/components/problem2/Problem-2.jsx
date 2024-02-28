import React, { useState,useRef } from 'react';
import Modal from './modal/modal';

import {Link,Outlet,useNavigate,useLocation} from 'react-router-dom'



const Problem2 = () => {
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    // const [showModal, setShowModal] = useState("");

    const handleClick = (e)=>{
        // console.log(e)
        // console.log(e.target.innerText)
        let gettitle = e.target.innerText;
        history.push(gettitle);
        setTitle(gettitle)
        showModal()
    }

    const handleModalClose = ()=>{
        navigate('/Problem2')
        hideModal()
    }


    const modalRef = useRef()
    
    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new bootstrap.Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show()
    }
    
    const hideModal = () => {
        const modalEle = modalRef.current
        const bsModal= bootstrap.Modal.getInstance(modalEle)
        bsModal.hide()
    }



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="">
                    <div className="d-flex justify-content-center gap-3">
                        <button  className="btn btn-lg btn-outline-primary" type="button"  onClick={handleClick}>All Contacts</button>
                        <button  className="btn btn-lg btn-outline-warning" type="button"  onClick={handleClick}>US Contacts</button>
                        {/* <Link to='/problem-2/all-contacts' className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=> setTitle("All Contacts")}>All Contacts</Link> */}
                        {/* <Link to='/problem-2/us-contacts' className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=> setTitle("US Contacts")}>US Contacts</Link> */}
                        {/* <Link to='/problem-2/all-contacts' className="btn btn-lg btn-outline-warning"  onClick={handleClick} >Test Contacts</Link> */}

                        {/* <Link to='/problem-2/us-contacts' state={{prevLocation:location}} className="btn btn-lg btn-outline-warning" onClick={handleClick} >Problem - 2</Link> */}

                    </div>
                </div>
            </div>
            <Modal modalRef={modalRef} show={showModal} hide={handleModalClose} title={title}/>
            <Outlet />
        </div>
    );
};

export default Problem2;