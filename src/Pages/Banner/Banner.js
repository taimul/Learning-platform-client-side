import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <header className="bg-dark py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">An Outstanding Place For Better Education</h1>
                            <p className="lead text-white-50 mb-4">To unlock the true potential of e-learning, it needs to be people-centered. It has to be rooted in the day-to-day lives of people within an organization who are learning and growing as individuals, while also supporting them and making them feel valued.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <Link to='/courses' className="btn btn-primary btn-lg px-4 me-sm-3" >View Courses</Link>
                                <Link to='/faq' className="btn btn-outline-light btn-lg px-4">FAQ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;