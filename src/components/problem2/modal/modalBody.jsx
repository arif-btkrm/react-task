import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'
import './../../../assets/scss/App.scss'
import InfoModal from './InfoModal'

function ModalBody({handleModal,data}) {
    console.log(data)
    const [filteredData, setFilteredData] = useState([])
    const [search, setSearch] = useState('')
    useEffect(()=>{
        setFilteredData(data);
    },[data])

    useEffect(()=>{
        let searchItem = data.filter((item)=> search == '' ? item : item.phone.includes(search))
        setFilteredData(searchItem);
    },[search])

    const handleSearch = (e)=>{
        // e.preventdefault;
        setSearch(e.target.value);
        // {search =='' && setFilteredData(data)}
    //    let searchItem = data.filter((item)=> search == '' ? item : item.phone.includes(search))
    //     setFilteredData(searchItem);
    }

    return (
        <>
        <div className="modal-body scrollpart">
            <div className="d-flex justify-content-center gap-3">
                <button  className="btn btn-lg btn-outline-primary" id="all-contacts" type="button"  onClick={handleModal}>All Contacts</button>
                <button  className="btn btn-lg btn-outline-warning" id="us-contacts" type="button"  onClick={handleModal}>US Contacts</button>
            </div>
            <div className="form-group py-3">
                <input type="search" className="form-control" id="search" defaultValue="" name="search" placeholder="search" onChange={handleSearch}/>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                </tr>
                </thead>
                <tbody>
                    
                    {
                        filteredData.map((item,index)=>{
                            return(
                                <tr key ={item.id} data-bs-toggle="modal" data-bs-target="#infoModal">
                                    <td scope="col">{item.id}</td>
                                    <td scope="col">{item.country.name}</td>
                                    <td scope="col">{item.phone}</td>

                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div>
        <InfoModal/>
        <Outlet />
        </div>
        </>
    );
}

export default ModalBody;