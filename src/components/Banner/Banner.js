import React from "react";
import { Link } from "react-router-dom";
import banner3 from "../../assets/images/banner/banner3.jpg";
import logo from "../../assets/images/logo/logo.png";

const Header = () => {
    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundImage: `url(${banner3})`,
                    minHeight: "70vh",
                }}
            >
                <div className="hero-overlay bg-opacity-60  text-center mx-auto"></div>
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div className="lg:w-1/2 sm:w-2/3 w-full animate-open px-4 my-3">
                        <h1 className="md:text-5xl text-3xl text-center md:text-justify font-bold text-white font-sans tracking-widest md:italic">
                            Laptop Warehouse!
                            <span>
                                <img src={logo} alt="" className="inline w-1/5" />
                            </span>
                        </h1>
                        <h3 className=" md:text-2xl text-xl  font-bold text-slate-300 font-serif">
                            The Laptop Warehouse.
                        </h3>
                        <p className="py-3 md:py-6 mb-4 text-slate-200 md:text-lg ">
                            Apple. Apple is definitely one of the luxury brands when it comes to Laptops, Smartphones, Computers and Tablets. ...
                            HP. HP also known as Hewlett-Packard is one of the oldest electronics brands that is not as popular as it used to be.
                        </p>

                        <Link
                            to="/about"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="white"
                            className="text-white bg-darki py-4 px-8 rounded-lg md:ml-48 shadow-lg active:scale-90 hover:text-gray-300 transition-all"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
