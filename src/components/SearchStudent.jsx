import React, { useState } from 'react'
import { Navbar } from './Navbar'

export const SearchStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
            
            
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-input" name='name' value={data.name} onChange={inputHandler} />
                            </div><br></br>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"></label>
                                <button onClick={readValue} className="btn btn-warning">SEARCH</button>
                            </div>

                        </div>
                    </div>
                </div>



</div>

            </div>
            )
}
