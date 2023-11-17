import React, { useState } from 'react'

import axios from 'axios';
import Nav from './Nav';

function View() {
    const [data, changeData] = useState([]);
    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/api/viewall/")
            .then((response) => {
                changeData(response.data);
            });
    };

    useState(() => {
        fetchData();
    }, []);
    return (
        <div>

            <Nav></Nav>
            <center><h1>Facebook Feeds</h1></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            {data.map(
                                (value, index) => {
                                    return <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div class="card mb-3">
                                            <img src="https://513577.fs1.hubspotusercontent-na1.net/hubfs/513577/hub_generated/resized/3e5ddfd5-bc04-4d3f-a0ec-3a75451b5073.jpeg" class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.message}</p>
                                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div></div>

                </div>
            </div>
        </div>
    )

}

export default View