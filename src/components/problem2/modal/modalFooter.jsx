import React from 'react';

function ModalFooter({setOnlyEven}) {
    const handleChange = (e)=>{
        setOnlyEven(e.target.checked)
    }
    return (
        <div className="modal-footer">
        <strong><input id="#even-only" type="checkbox" name="even" onChange={handleChange}/> Only even</strong>
      </div>
    );
}

export default ModalFooter;