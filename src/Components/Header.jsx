import React, { useState } from 'react'
import img1 from "../assets/images/logo/metablock-logos-main.png"
import sunimage from "../assets/images/icons/sun-01.svg"
import { useNavigate } from 'react-router-dom'
import TemporaryDrawer from './ResponsiveNavbar'
const Header = () => {
    const navigate = useNavigate()

    return (
        <div>

            <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="header-left d-flex">
                                <div className="logo">
                                    <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                                        <img style={{ width: "130px" }} src={img1} alt="Metablock Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 position-static d-none d-lg-block">
                            <nav className="mainmenu-nav onepagenav">
                                <ul className="mainmenu justify-content-center">
                                    <li className="current"><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#clients">Clients</a></li>
                                    <li><a href="#contact">Contact With Us</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="header-right">
                                {/* Start Mobile-Menu-Bar */}
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <div className="toggle-button">
                                            <TemporaryDrawer />
                                        </div>
                                    </div>
                                </div>
                                {/* Start Mobile-Menu-Bar */}


                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
