import React from "react";
import { Link } from "react-router-dom";
import note from '../../assets/images/notFound.gif'
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <div className="mobile-msg">
                <img className="img" src={note} alt="" />
                <div className="flex items-center justify-center">
                    <Link
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="white"
                        to="/"
                        type="button"
                        className=" my-6 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
