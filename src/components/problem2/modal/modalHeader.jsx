import React from 'react';

function ModalHeader(props) {
    return (
        <>
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
            {/* <br/>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=> setTitle("All Contacts")}>All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=> setTitle("US Contacts")}>US Contacts</button>
            </div> */}
            
        </div>
        </>
    );
}

export default ModalHeader;