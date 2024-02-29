import React from 'react';

function ModalHeader(props) {
    return (
        <>
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
{/*         
           <div>
           <button  className="btn btn-lg btn-outline-primary" id="all-contacts" type="button"  onClick={handleClick}>All Contacts</button>
           <button  className="btn btn-lg btn-outline-warning" id="us-contacts" type="button"  onClick={handleClick}>US Contacts</button>
           </div> */}
            
        </div>
        </>
    );
}

export default ModalHeader;