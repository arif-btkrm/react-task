import React, { useEffect, useState,useRef } from 'react';

import ModalBody from './modalBody';
import ModalFooter from './modalFooter';
import ModalHeader from './modalHeader';
import {useNavigate,useLocation} from 'react-router-dom'


function Modal({modalRef,show, hide,title}) {
{/*
    US Link Constacts
    https://contact.mediusware.com/api/country-contacts/United%20States/?page_size=50
*/}

    // console.log(title)
    // const modalRef = useRef()
    // const showModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal = new bootstrap.Modal(modalEle, {
    //         backdrop: 'static',
    //         keyboard: false
    //     })
    //     bsModal.show()
    // }

    // useEffect(()=>{
    //     showModal();
    // },[])
    
    const location = useLocation();
    // console.log(location);
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch('https://contact.mediusware.com/api/contacts/?page_size=50)')
        .then((res)=> res.json())
        .then((data)=>{
            setData(data.results)
        })
        console.log(data)
    },[])


    return (
       <>
        
 {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   Launch static backdrop modal
 </button> */}


<div className="modal fade" ref={modalRef} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
        <ModalHeader title={title}/>
        <ModalBody data = {data}/>
        <ModalFooter/>
    </div>
  </div>
</div>
       </>
    );
}

export default Modal;