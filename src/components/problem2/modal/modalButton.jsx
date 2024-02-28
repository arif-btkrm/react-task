import React from 'react';

function ModalButton({title,setTitle}) {
    return (
        <div>
            <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=> setTitle(title)}>{title}</button>
        </div>
    );
}

export default ModalButton;