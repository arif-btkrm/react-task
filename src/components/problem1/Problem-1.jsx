import React, {useState, useEffect} from 'react';

const Problem1 = () => {

    const initInput = {name:"", status:""}
    const [show, setShow] = useState('all');
    const [input,setInput] = useState(initInput);
    const [task,setTask] = useState([]);
    const [display, setDisplay] = useState([]);

    const handleClick = (val) =>{
        setShow(val);
    }

    useEffect(()=>{
        if (show=='all'){
            setDisplay(task)
        }
        else if (show=='active'){
            const active = task.filter((item)=>{
                return (item.status == 'active' || item.status == 'Active')
            })
            setDisplay(active);
        }
        else if (show=='completed'){
            const completed = task.filter((item)=>{
                return (item.status == 'completed' || item.status == 'Completed')
            })
            setDisplay(completed);
        }
    },[show])

    const inputFormHandler = (e) => {
        e.preventDefault();
        task.length>0? setTask([...task, input ]) : setTask([ input ]);
        setInput(initInput)
    }; 
    
    const sortTask = (task1)=>{
        task1.sort((obj1,obj2)=>{
                const status1 = obj1.status.toLowerCase();
                const status2 = obj2.status.toLowerCase();
            if( status1 < status2){
                return -1;
            }
            else if( status1 > status2){
                return 1;
            }
            else{
                return 0;
            }
        })

    }

    useEffect(()=>{
        if(task.length>1) sortTask(task) 
        setDisplay(task)
    },[task])


    const handleChange = (e) => {
        setInput((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={inputFormHandler}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name={"name"}  value={input.name} onChange={handleChange} required/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status"  name={"status"} value={input.status} onChange={handleChange}
                    required/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                display.map((item,index)=>{
                                    return(
                                     <tr key ={index}>
                                         <td scope="col">{item.name}</td>
                                         <td scope="col">{item.status}</td>
                                     </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;