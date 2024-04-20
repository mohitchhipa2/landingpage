import React from 'react'
import "../App.css"
import img1 from "../assets/images/new-metablock-scanner.jpg"
import { FaHome, FaEnvelope, FaFacebookF, FaLinkedin, FaWhatsapp, FaSkype } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiLinkedin, FiPhoneCall, FiMessageCircle, FiMessageSquare } from 'react-icons/fi';
import { AiFillSkype } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {

    const handleLocationClick = () => {
        // Handle location click functionality here
    };
    return (
        <div>

            <footer className="text-lg-start" style={{ backgroundColor: '#000000', textAlign: 'center' }}>
                <section style={{ background: '#010101' }}>
                    <div className="container text-md-start mt-5">
                        <div className="row mt-3 d-flex align-center">
                            <div style={{ marginTop: '20vh' }} className="col-md-2 col-lg-2 col-xl-2 mx-auto footer_logo ">
                                {/* <div class="Company-logo">
                          <img style="margin-bottom: 50px; width: 400px;" class="Company-logo"
                              src="./assets/images/new-metablock-scanner.jpg" alt="">
                      </div> */}
                                <div className="payment-method">
                                    <div className="image-container">
                                        <img className="footer-in-payment-method" src={img1} alt />
                                        <div className="overlay-text">Scan Me</div>
                                        <p style={{ fontSize: 15, textAlign: 'center' }}>Save Contact Details</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                <p>
                                    <a target='_blank' href="https://metablocktechnologies.in/"><span className="footer-in-Pages">WEBSITE</span></a>
                                </p>
                                <p>
                                    <a href="/SoftwareDevelopment"><span className="footer-in-Pages">SOFTWARE</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/blockchaindevelopment"><span className="footer-in-Pages">BLOCKCHAIN</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/ApplicatonDevelopment"><span className="footer-in-Pages">APPLICATION</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/MetaverseDevelopment"><span className="footer-in-Pages">METAVERSE</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/GeneralGamesDevelopment"><span className="footer-in-Pages">GAME</span></a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                <p className="footer-contact-number">
                                    <a href="/ContectUsForm"><span className="footer-in-Pages">CONTACT US</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/Aboutus"><span className="footer-in-Pages">ABOUT US</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/Celebrations"><span className="footer-in-Pages">CELEBRATIONS</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/gallery"><span className="footer-in-Pages">GALLERY</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/InsightsFAQ"><span className="footer-in-Pages">FAQ</span></a>
                                </p>
                                <p className="footer-contact-number">
                                    <a href="/PrivacyPolicy"><span className="footer-in-Pages">PRIVACY POLICY</span></a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                <p><FaHome style={{ marginRight: 5 }} />30-A, Gopalpura Bypass Rd,
                                    opp. Holiday Inn Hotel, opp.
                                    Holiday Inn, Sultan Nagar, Santi Nagar, Gurjar Ki Thadi, Jaipur, Rajasthan 302020
                                    <a target='_blank' href="https://maps.app.goo.gl/DtA7yg3N7yNKuXgE7">   <span onClick={handleLocationClick} style={{ background: 'red', cursor: 'pointer', borderRadius: 2 }}><IoLocationOutline />
                                    </span></a>
                                </p>
                                <a href="mailto:info@metablocktechnologies.in" target="_blank" rel="noopener noreferrer">
                                    <p className="footer-contact-number"><FaEnvelope style={{ marginRight: 5 }} />info@metablocktechnologies.in</p>
                                </a>
                                <a href="tel:+919358593003" target="_blank" rel="noopener noreferrer">
                                    <p className="footer-contact-number"> <FiPhoneCall style={{ marginRight: 5 }} />+91 935 859 3003</p>
                                </a>
                                <a href="tel:+919358593002" target="_blank" rel="noopener noreferrer">
                                    <p className="footer-contact-number"> <FiPhoneCall style={{ marginRight: 5 }} />+91 935 859 3002</p>
                                </a>
                                <div style={{ marginBottom: "10px" }}>
                                    <a href="https://www.facebook.com/metablocktechnologies" target="_blank" rel="noopener noreferrer" className=" me-4">
                                        <FaFacebookF style={{ fontSize: "20px" }} />
                                    </a>
                                    <a href="https://www.instagram.com/metablocktechnologies1?igsh=Zmxva3Fnd3o1NzBw" target="_blank" rel="noopener noreferrer" className=" me-4">
                                        <FiInstagram style={{ fontSize: "20px" }} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/metablocktechnologies" target="_blank" rel="noopener noreferrer" className=" me-4">
                                        <FaLinkedin style={{ fontSize: "20px" }} />
                                    </a>
                                    <a href="https://wa.me/919358593003" target="_blank" rel="noopener noreferrer" className=" me-4">
                                        <FaWhatsapp style={{ fontSize: "20px" }} />
                                    </a>
                                    <a href="skype:live:.cid.example?chat" target="_blank" rel="noopener noreferrer" className=" me-4">
                                        <FaSkype style={{ fontSize: "20px" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>


        </div>
    )
}

export default Footer
