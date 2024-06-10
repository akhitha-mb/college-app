import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'

export const Viewall = () => {
    const [data,changeData] =useState([])
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response) => {
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <h1><center>VIEW ALL STUDENTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First NAME</th>
                                    <th scope="col">Last NAME</th>
                                    <th scope="col">COLLEGE</th>



                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return  <tr>
                                        <td>{value._id}</td>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>

                                        </tr>
                                    }
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}
