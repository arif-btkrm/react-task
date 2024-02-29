import React from 'react';

function ModalHeader({handleModal,title}) {
    return (
        <>
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
            <button type="button" className="btn" id="cls-btn" onClick={handleModal} aria-label="Close">Close</button> 
            
        </div>
        </>
    );
}

export default ModalHeader;