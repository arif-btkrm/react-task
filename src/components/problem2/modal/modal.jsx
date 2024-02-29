import React, { useEffect, useState } from 'react';

import ModalBody from './modalBody';
import ModalFooter from './modalFooter';
import ModalHeader from './modalHeader';


function Modal({modalRef,show, hide,title}) {

    const [onlyEven, setOnlyEven] = useState(false)
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [page,setPage] = useState(1); 
    const [pageSize,setPageSize] = useState(20);
    const allContact = `https://contact.mediusware.com/api/contacts/?page=${page}&page_size=${pageSize}`;
    const usContact = `https://contact.mediusware.com/api/country-contacts/United%20States/?page=${page}&page_size=${pageSize}`;
    const [url,setUrl]= useState("");
    
    
    
    useEffect(()=>{
        if(onlyEven == true){
            let even = data.filter((item)=>{
                if(parseInt(item.id) %2 === 0){
                    return item;
                } 
            })
            setFilteredData(even);
        }
        else{
            setFilteredData(data);
        }
    },[onlyEven])

    // useEffect(()=>{
    //     setPage(`${page+1}`)
    // },[])

    useEffect( ()=>{
        // console.log(title == "All Contacts")
        const link = title.toString() == "All Contacts" ?  usContact :allContact ;
        setUrl(link);
        getData();
    },[page,title])

    const getData = async ()=>{
        
        await fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
              setData(data.results)
              setFilteredData(data.results)
            //    console.log(data)
        })
    }  

    return (
       <>
        
<div id="mainModal" className="modal fade" ref={modalRef} data-bs-keyboard="false" tabIndex="-1"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
        <ModalHeader handleModal = {hide} title={title}/>
        <ModalBody handleModal = {show} data = {filteredData} />
        <ModalFooter setOnlyEven = {setOnlyEven}/>
    </div>
  </div>
</div>
       </>
    );
}

export default Modal;