import React from "react";
import Image from "next/image";
//import Script from 'bootstrap.min.js'


const Header = () => {
    return (
        <div className="col-lg-4 ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-color fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">Robin's World</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="basicExampleNav">


                        <ul class="navbar-nav mr-auto ">
                            <li class="nav-item active">
                                <a class="nav-link font-italic text-primary " href="#">Home
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-primary" href="blog">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-primary" href="#">Art</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-primary" href="#">Tech</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-primary" href="#">About</a>
                            </li>



                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">More</a>
                                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}

                        </ul>


                        <form class="form-inline  float-right">
                            <div class="md-form mx-5">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </form>
                    </div>

                </div>
            </nav>
        </div>
    );
};
export default Header;