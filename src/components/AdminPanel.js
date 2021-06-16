import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <section className="admin">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <div className="card">
                                <div className="card-body p-4">
                                    <NavLink className="btn btn-danger btn-lg btn-block" to='/course/new'>Create New Course</NavLink> 
                                    <hr/>
                                    <NavLink className="btn btn-danger btn-lg btn-block" to='/episode/new'>Create New Episode</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pl-5 ">
                            <div className="card">
                                <div className="card-body admin-text">
                                    <div className="text-center">
                                        <h3>For the Creators of CreatorsHub</h3> <br/>
                                    </div>
                                    <div className="p-4">
                                        <p>Admin access allow you to create new and inviting courses and episodes to allow users to learn through your knowledge and experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminPanel