import React, { useEffect, useState } from 'react'
import { SiBlockchaindotcom } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { SiPaloaltosoftware } from "react-icons/si";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { SiGamedeveloper } from "react-icons/si";
import { SiEquinixmetal } from "react-icons/si";
import SimpleSlider from '../Components/Slider';
import Slider from 'react-slick';
import img1 from "../assets/images/projects/1725.jpg"
import img2 from "../assets/images/projects/Datingapp.webp"
import img3 from '../assets/images/projects/astrology.webp'
import img4 from '../assets/images/projects/matir-app.png'
import img5 from '../assets/images/projects/social-media.webp'
import img6 from '../assets/images/projects/lms2.jpeg'
import img7 from '../assets/images/projects/fooddelivery.png'
import img8 from '../assets/images/projects/schoolmanagement.jpeg'
import img9 from '../assets/images/projects/clinicmanagement.png'
import img10 from '../assets/images/projects/jobportal.jpg'
import img11 from '../assets/images/projects/reachargeportal.png'
import img12 from '../assets/images/projects/mlmsoftware.jpg'
import img13 from '../assets/images/projects/erpsoftwares.jpg'
import img14 from '../assets/images/projects/reachargeportal.png'
import img15 from '../assets/images/projects/mlmsoftware.jpg'
import img16 from "../assets/images/projects/quizsystem.png"
import img17 from "../assets/images/projects/crmsoftware2.jpg"
import img18 from "../assets/images/projects/hrmsoftware2.png"
import img19 from "../assets/images/projects/hrmssoftware3.jpeg"
import img20 from "../assets/images/projects/accountingsoft.webp"
import img21 from "../assets/images/projects/possoftware2.png"
import img22 from "../assets/images/projects/employeetracking2.jpg"
import img23 from "../assets/images/projects/inventorymanagementsystem.jpeg"
import img24 from "../assets/images/projects/warehousemanagementsystem.jpg"
import img25 from "../assets/images/projects/University-Management-System.webp"
import img26 from "../assets/images/projects/lmsapplication.png"
import img27 from "../assets/images/projects/coaching_big.png"
import img28 from "../assets/images/projects/librarymanagement.jpeg"
import img29 from "../assets/images/projects/newsportal.jpg"
import img30 from "../assets/images/projects/blogingwebsite.jpg"
import img31 from "../assets/images/projects/projectmanagement.jpg"
import img32 from "../assets/images/projects/taskmanagement.png"
import img33 from "../assets/images/projects/onlinestreaming.png"
import img34 from "../assets/images/projects/audiopodcast.jpeg"
import img35 from "../assets/images/projects/ebooksoftware.jpg"
import img36 from "../assets/images/projects/hospitalmanagement.jpg"
import img37 from "../assets/images/projects/labmanagement.avif"
import img38 from "../assets/images/projects/doctorappointment.png"
import img39 from "../assets/images/projects/pharmacymanagement.jpg"
import img40 from "../assets/images/prod/MB/acRepairing.png"
import img41 from "../assets/images/prod/MB/advocateManagement.jpg";
import img42 from "../assets/images/prod/MB/Affilate Managment System.jpg"
import img43 from "../assets/images/prod/MB/AlgoTradingApp.jpg";
import img44 from "../assets/images/prod/MB/BusBookingapp.webp";
import img45 from "../assets/images/prod/MB/CabBooking.jpg";
import img46 from "../assets/images/prod/MB/CattleManagerSoftware.jpg";
import img47 from "../assets/images/prod/MB/courierSystem.jpg";
import img48 from "../assets/images/prod/MB/crowdfunding.jpg";
import img49 from "../assets/images/prod/MB/CryptoTradingApp.jpg";
import img50 from "../assets/images/prod/MB/DairyFarmManager.jpg";
import img51 from "../assets/images/prod/MB/EVchargingapp.png";
import img52 from "../assets/images/prod/MB/eventManagement.jpg";
import img53 from "../assets/images/prod/MB/FlightBooking.jpg";
import img54 from "../assets/images/prod/MB/GarageWorkshopManagementSystem.jpg";
import img55 from "../assets/images/prod/MB/Groccery.jpg";
import img56 from "../assets/images/prod/MB/gymManagementSystem.jpg";
import img57 from "../assets/images/prod/MB/HotelManagement.jpg";
import img58 from "../assets/images/prod/MB/LivestockManagement.jpg";
import img59 from "../assets/images/prod/MB/LoanManagement.jpg";
import img60 from "../assets/images/prod/MB/LodderBooking.jpg";
import img61 from "../assets/images/prod/MB/Logistic System.jpg";
import img62 from "../assets/images/prod/MB/Metatrade 4-5 Trading Software.jpg";
import img63 from "../assets/images/prod/MB/MovieTicketBooking.png";
import img64 from "../assets/images/prod/MB/NGO Management.jpg";
import img65 from "../assets/images/prod/MB/PropertyManagementSoftware.png";
import img66 from "../assets/images/prod/MB/PG management.png";
import img67 from "../assets/images/prod/MB/PropertyListingSoftware.jpg";
import img68 from "../assets/images/prod/MB/PropertyManagementSoftware.png";
import img69 from "../assets/images/prod/MB/RealStateSoftware.jpg";
import img70 from "../assets/images/prod/MB/RideSharingApp.jpg";
import img71 from "../assets/images/prod/MB/saloonManagement.png";
import img72 from "../assets/images/prod/MB/spaManagement.jpg";
import img73 from "../assets/images/prod/MB/SportManagmentSystem.png";
import img74 from "../assets/images/prod/MB/TiffinCenter.jpg";
import img75 from "../assets/images/prod/MB/TradingApp.jpg";
import img76 from "../assets/images/prod/MB/TravelBookingApp.png";
import img77 from "../assets/images/prod/MB/VehicleManagement.png";
import img78 from "../assets/images/prod/MB/VehicleTrackingApp.jpg";
import img79 from '../assets/images/blockchain/blockcahindevelopment.jpg'
import img80 from '../assets/images/blockchain/launchpad.png'
import img81 from '../assets/images/blockchain/wallet.png'
import img82 from '../assets/images/blockchain/token.jpeg'
import img83 from '../assets/images/blockchain/defi.png'
import img84 from '../assets/images/blockchain/nft.jpeg'
import img85 from '../assets/images/blockchain/dex.png'
import imgage from "../assets/images/logo/metablock-logos-main.png"

import { FaHome, FaEnvelope, FaFacebookF, FaLinkedin, FaWhatsapp, FaSkype } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiLinkedin, FiPhoneCall, FiMessageCircle, FiMessageSquare } from 'react-icons/fi';
import { AiFillSkype } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';


import TestimonialSlider from '../Components/TestimonialSlider';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
const Home = () => {

  const handleLocationClick = () => {
    // Handle location click functionality here
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate()

  const portfolioItems = [
    {
      id: 1,
      category: ["SoftWare", "All"],
      title: 'E-Commerce Website',
      image: img1,
      subtitle: 'development'
    },
    {
      id: 2,
      category: ["Application", "All"],
      title: 'Dating App',
      image: img2,
      subtitle: 'design',
    },
    {
      id: 3,
      category: ["Application", "All"],
      title: 'Astrology App',
      image: img3,
      subtitle: 'art'
    },
    {
      id: 4,
      category: ["SoftWare", "All"],
      title: 'Matrimonial SoftWare',
      image: img4,
      subtitle: 'Photoshop'
    },
    {
      id: 5,
      category: ["SoftWare", "All"],
      title: 'Social Media Portal',
      image: img5,
      subtitle: 'development'
    },
    {
      id: 6,
      category: ["SoftWare", "All"],
      title: 'LMS SoftWare',
      image: img6,
      subtitle: 'Application'
    },
    {
      id: 7,
      category: ["Application", "All"],
      title: 'Food Delivery',
      image: img7,
      subtitle: 'Application'
    },
    {
      id: 8,
      category: ["SoftWare", "All"],
      title: 'School Management',
      image: img8,
      subtitle: 'SoftWare'
    },
    {
      id: 9,
      category: ["SoftWare", "All"],
      title: 'CLinic Management',
      image: img9,
      subtitle: 'SoftWare'
    },
    {
      id: 10,
      category: ["SoftWare", "All"],
      title: 'Job Portal',
      image: img10,
      subtitle: 'development'
    },
    {
      id: 11,
      category: ["SoftWare", "All"],
      title: 'Reacharge Portal',
      image: img11,
      subtitle: 'design'
    },
    {
      id: 12,
      category: ["SoftWare", "All"],
      title: 'MLM SoftWare',
      image: img12,
      subtitle: 'art'
    },
    {
      id: 13,
      category: ["SoftWare", "All"],
      title: 'ERP SoftWare',
      image: img13,
      subtitle: 'development'
    },
    {
      id: 14,
      category: ['SoftWare', "All"],
      title: 'Reacharge Portal',
      image: img14,
      subtitle: 'design'
    },
    {
      id: 15,
      category: ["SoftWare", "All"],
      title: 'MLM SoftWare',
      image: img15,
      subtitle: 'art'
    },
    {
      id: 79,
      category: ["Blockchain"],
      title: 'Blockchain Development',
      image: img79,
      subtitle: 'Blockchain'
    },
    {
      id: 80,
      category: ["Blockchain"],
      title: 'Launchpad Development',
      image: img80,
      subtitle: 'Blockchain'
    },
    {
      id: 81,
      category: ["Blockchain"],
      title: 'Wallet Development',
      image: img81,
      subtitle: 'Blockchain'
    },
    {
      id: 82,
      category: ["Blockchain"],
      title: 'Token Development',
      image: img82,
      subtitle: 'Blockchain'
    },
    {
      id: 83,
      category: ["Blockchain"],
      title: 'Defi Development',
      image: img83,
      subtitle: 'Blockchain'
    },
    {
      id: 84,
      category: ["Blockchain"],
      title: 'NFT Development',
      image: img84,
      subtitle: 'Blockchain'
    },
    {
      id: 85,
      category: ["Blockchain"],
      title: 'Dex Development',
      image: img85,
      subtitle: 'Blockchain'
    },
    {
      id: 16,
      title: "Quiz System",
      image: img16,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 22,
      title: "Employee Tracking",
      image: img22,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 6,
      title: "LMS Application",
      image: img6,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 33,
      title: "Online Streaming",
      image: img33,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 43,
      title: "Algo Trading",
      image: img43,
      category: ['Application'],
      subtitle: "Application"
    },
    {
      id: 44,
      title: "Bus Booking",
      image: img44,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 45,
      title: "Cab Booking",
      image: img45,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 48,
      title: "Crowd Funding",
      image: img48,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 49,
      title: "Crypto Trading",
      image: img49,
      category: ['Games', 'Application'],
      subtitle: "Application"
    },
    {
      id: 51,
      title: "EV Charging",
      image: img51,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 33,
      title: "Flight Booking",
      image: img33,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 34,
      title: "Grocery",
      image: img34,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 35,
      title: "Lodder Booking",
      image: img35,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 36,
      title: "Metatrade Trading",
      image: img36,
      category: ['Application'],
      subtitle: "Application"
    },
    {
      id: 37,
      title: "Movie Ticket Booking",
      image: img37,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 38,
      title: "Ride Sharing",
      image: img38,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 39,
      title: "Saloon Management",
      image: img39,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 40,
      title: "Tiffin Center",
      image: img40,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 41,
      title: "Trading App",
      image: img41,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 42,
      title: "Travel Booking",
      image: img42,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 43,
      title: "Vehicle Tracking",
      image: img43,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 44,
      title: "Game Development",
      image: img44,
      category: ["Games"],
      subtitle: "Games"
    },
    {
      id: 45,
      title: "Casino Development",
      image: img45,
      category: ["Games"],
      subtitle: "Games"
    },
    {
      id: 46,
      title: "Metaverse Game",
      image: img46,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 47,
      title: "Ludo Game",
      image: img47,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 48,
      title: "Rummy Game",
      image: img48,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 49,
      title: "Teen Patti Game",
      image: img49,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 50,
      title: "Dragon & Tiger",
      image: img50,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 51,
      title: "Poker Game",
      image: img51,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 52,
      title: "Bacarrat Game",
      image: img52,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 53,
      title: "Andar Bahar Game",
      image: img53,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 54,
      title: "Fantasy Game",
      image: img54,
      category: ["Games"],
      subtitle: "Development"
    },
    {
      id: 55,
      title: "Metaverse Development",
      image: img55,
      category: ["Metaverse"],
      subtitle: "Development"
    },

    {
      id: 56,
      title: "NFT Marketplace",
      image: img56,
      category: ["Metaverse"],
      subtitle: "Development"
    },

    {
      id: 57,
      title: "Virtual Showroom",
      image: img57,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 58,
      title: "Event Platform",
      image: img58,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 59,
      title: "Metaverse Avatar",
      image: img59,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 60,
      title: "Metaverse Social Media",
      image: img60,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 61,
      title: "Real Estate",
      image: img61,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 62,
      title: "Virtual Land",
      image: img62,
      category: ["Metaverse"],
      subtitle: "Development"
    },
    {
      id: 63,
      title: "Metaverse Launchpad",
      image: img63,
      category: ["Metaverse"],
      subtitle: "Development"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPortfolioItems =
    selectedCategory === ''
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(selectedCategory));



  const words = [
    'E-Commerce Website',
    'Dating App',
    'Astrology App',
    'Matrimonial Software',
    'Social Media Portal',
    'LMS Software',
    'Food Delivery App',
    'School Management SoftWare',
    'Clinic Management SoftWare',
    'Job Portal',
    'Recharge Portal',
    'MLM Software',
    'ERP Software',
    'HRMS Software',
    'Accounting Software'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the word index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (


    <div>
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <a>
                <img className="logo-light" src="assets/images/logo/logo.png" alt="Corporate Logo" />
                <img className="logo-dark" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
              </a>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <ul className="mainmenu onepagenav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#team">Meet The Team</a></li>
            <li><a href="#contact">Contact With Us</a></li>
          </ul>
        </div>
      </div>
      {/* Start Theme Style  */}
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      {/* End Theme Style  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Slider Area  */}
      <div className="slider-area slider-style-1 variation-default bg_image bg_image--23 height-950 d-flex align-items-center" id="home" data-black-overlay={7}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 style={{ marginTop: "20vh" }} className="title display-one">
                  Product And Services<br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <span style={{ fontSize: "60px" }} className="cd-words-wrapper">
                        {words.map((word, index) => (
                          <b
                            key={index}
                            className={index === currentIndex ? 'is-visible theme-gradient' : 'is-hidden theme-gradient'}
                          >
                            {word}
                          </b>
                        ))}
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="description">We help Business grow and dominate their industries with the help of the latest IT technologies.
                  experiences, and print materials.</p>
                <div className="button-group mt--30">
                  <a className="btn-default round btn-large">GET STARTED NOW!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <section className="position-relative  ourservises " id="service">

        <div className="bg-filter " />
        <div className="w-100 d-flex align-items-center justify-content-center flex-column">
          <h1 style={{ fontSize: '54px' }} className="display-6 pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
            Our Services
          </h1>
          <p className="text-center text-white">MetaBlock provides a comprehensive range of IT solutions for a variety of industries and segments.Our core focus is on  <br /> Blockchain technology along with online, metaverse, gaming and software development.  Whatever your  <br /> IT demands are, MetaBlock can provide you with cutting-edge IT solutions.
          </p>
        </div>
        {/* <div class="w-100 d-flex align-items-center justify-content-center">
      <h1 class="display-6 pb-4 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title">Our services</h1>
  </div> */}
        <div className=" d-flex justify-content-center flex-wrap py-5">

          <span className="ser-card bg-transparent" >

            <div className="front blockchain">
              <p style={{ textShadow: '2px 2px 4px lightblue' }} className='font-famely-in '>Blockchain / Web3</p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title">Blockchain / Web3</p>
              </div>
              <ul className="blockchain-lists">
                <li>Bockchain Development
                </li>
                <li>Token Development
                </li>
                <li>DEX  Development
                </li>
                <li>DeFi Development
                </li>
                <li>NFT Development
                </li>
                <li> Wallet Development
                </li>

                <li>DAO Blockchain Developmnent
                </li>



              </ul>
              {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
            </div>
          </span>
          <span className="ser-card bg-transparent" >

            <div className="front web" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image19.jpg)' }}>
              <p style={{ textShadow: '2px 2px 4px lightblue' }}>Web Development</p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title">Web Development</p>
              </div>
              <ul className="blockchain-lists">
                <li>Static Website</li>
                <li>Dynamic Website</li>
                <li>E-commerce website ( Single & Multi Vendor )</li>


              </ul>
              {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
            </div>


          </span>


          <span className="ser-card bg-transparent" >

            <div className="front software" style={{
              // backgroundImage: 'linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image20.jpg)',
            }}>
              <p style={{ textShadow: '2px 2px 4px lightblue' }}>Software Development</p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title">Software Development</p>
              </div>
              <ul className="blockchain-lists">
                <li>ERP Software
                </li>
                <li>SAAS Software
                </li>
                <li>LMS With Live Class

                </li>
                <li>Travel Booking Software
                </li>
                <li>Restaurant Managment System
                </li>
                <li>MLM Software
                </li>
              </ul>
              {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
            </div>

          </span>

        </div>
        <div className=" d-flex justify-content-center flex-wrap py-5">
          <span className="ser-card bg-transparent" >

            <div className="front blockchain-back Aplication" >
              <p style={{ textShadow: '2px 2px 4px lightblue' }}>Application Development</p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title" >Application Development</p>
              </div>
              <ul className="blockchain-lists">
                <li>Cab Booking
                </li>
                <li>Social Media Apps

                </li>
                <li>Learning Managment

                </li>
                <li>Chatting APP

                </li>
                <li>Dating Apps

                </li>
                <li>Astrology App
                </li>
                <li>Rental App

                </li>


              </ul>
              {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
            </div>

          </span>
          <span className="ser-card bg-transparent" >

            <div className="front games" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image22.jpg)' }}>
              <p style={{ textShadow: '2px 2px 4px lightblue' }}>Gaming Development</p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title">Gaming Development</p>
              </div>
              <ul className="blockchain-lists">
                <li>Daman game
                </li>
                <li>Rummy Game

                </li>
                <li>Dragon & Tiger Game

                </li>
                <li>Avaitor Game

                </li>
                <li>Fantasy Cricket Game

                </li>
                <li>Pokar Game
                </li>
                <li>Tournment Development

                </li>

              </ul>
              {/* <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div> */}
            </div>

          </span>
          <span className="ser-card bg-transparent" >

            <div className="front metaverse" style={{ backgroundImage: ' linear-gradient(rgba( 0,0,0,0.2) , rgba(0,0,0,0.3)) , url(./images/image23.jpg)' }}>
              <p style={{ textShadow: '2px 2px 4px lightblue' }}>Metaverse </p>
            </div>
            <div className="back d-flex align-items-start flex-column justify-content-start py-4">
              <div className="head1">
                <p className="text-white fw-bold fs-3 grident-color-sub-title">Metaverse </p>
              </div>
              <ul className="blockchain-lists">
                <li>Metaverse Development
                </li>
                <li>Metaverse Game Development
                </li>
                <li>Metaverse Avatar Development
                </li>
                <li>Metaverse Virtual Land Development
                </li>

                <li>Metaverse Event Platform Development
                </li>


              </ul>

            </div>

          </span>

        </div>

      </section>
      {/* Start Service-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Portfolio Area  */}
      <div className="rainbow-portfolio-area rainbow-section-gap masonary-wrapper-activation" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center" data-sal-duration={700} data-sal-delay={100}>
                <h2 className="title w-600 mb--20">Projects</h2>
                <p className="description b1">There are many variations of passages.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
                <button onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'is-checked' : ''} data-filter="*">
                  <span className="filter-text">All</span>
                </button>
                <button onClick={() => setSelectedCategory('Blockchain')} className={selectedCategory === 'Blockchain' ? 'is-checked' : ''} data-filter=".Blockchain">
                  <span className="filter-text">Blockchain</span>
                </button>
                <button onClick={() => setSelectedCategory('Application')} className={selectedCategory === 'Application' ? 'is-checked' : ''} data-filter=".Application">
                  <span className="filter-text">Application</span>
                </button>
                <button onClick={() => setSelectedCategory('SoftWare')} className={selectedCategory === 'SoftWare' ? 'is-checked' : ''} data-filter=".SoftWare">
                  <span className="filter-text">SoftWare</span>
                </button>
                <button onClick={() => setSelectedCategory('Games')} className={selectedCategory === 'Games' ? 'is-checked' : ''} data-filter=".Games">
                  <span className="filter-text">Games</span>
                </button>
                <button onClick={() => setSelectedCategory('Metaverse')} className={selectedCategory === 'Metaverse' ? 'is-checked' : ''} data-filter=".Metaverse">
                  <span className="filter-text">Metaverse</span>
                </button>


                {/* Add category buttons dynamically here if needed */}
              </div>
              <div className="portfolio-items grid-metro3 mesonry-list">
                <div className="resizer" />
                {/* Render portfolio items dynamically */}
                <div className="portfolio-row">
                  {filteredPortfolioItems.map((item, index) => (
                    <div key={item.id} className={`portfolio-3 ${item.category.join(' ')}`}>
                      <div className="rainbow-card portfolio">
                        <div className="inner">
                          <div className="thumbnail">
                            <figure className="card-image">
                              <a href="portfolio-details.html">
                                <Link to={`/project-details/${item.id}`}>
                                  <img style={{ height: "40vh" }} src={item.image} alt={item.title} />
                                </Link>

                              </a>
                            </figure>
                            <a className="rainbow-overlay" href="portfolio-details.html" />
                          </div>
                          <div className="content">
                            <h5 className="title mb--10">
                              <a href="portfolio-details.html">{item.title}</a>
                            </h5>
                            <span className="subtitle b2">{item.subtitle}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Start Load More Button  */}
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-load-more text-center mt--60">
                <a onClick={() => navigate("/projects")} className="btn btn-default btn-large btn-icon round">
                  <span>View More <span className=" icon"></span></span>
                </a>
              </div>
            </div>
          </div>
          {/* End Load More Button  */}
        </div>
      </div>
      {/* End Portfolio Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-1  */}
      <div className="rainbow-brand-area rainbow-section-gap" id="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center" data-sal-duration={700} data-sal-delay={100}>
                <h2 className="title w-600 mb--20">Brands We Have Worked With</h2>
                <p className="description b1">There are many variations of passages.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--40">
              <SimpleSlider />
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <TestimonialSlider />
          </div>
        </div>
      </div>
      {/* End Brand Style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      <div className="rainbow-contact-area rainbow-section-gap" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div className="section-title text-center" data-sal-duration={700} data-sal-delay={100}>
                <h2 className="title w-600 mb--20">Our Contact </h2>
                <p className="description b1">Contact for Any Inquiry</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <form className="contact-form-1 rainbow-dynamic-form" id="contact-form" method="POST" action="mail.php">
                <div className="form-group">
                  <input type="text" name="contact-name" id="contact-name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="contact-phone" id="contact-phone" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <input type="email" id="contact-email" name="contact-email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                </div>
                <div className="form-group">
                  <textarea name="contact-message" id="contact-message" placeholder="Your Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <button name="submit" type="submit" id="submit" className="btn-default btn-large rainbow-btn round">
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="google-map-style-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.741738284556!2d75.7662892740175!3d26.87994526150057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a5fb98562f%3A0x18d64b11f30e9600!2sMetaBlock%20Technologies!5e0!3m2!1sen!2sin!4v1713182855530!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>










      {/* <div className="col-lg-5 col-12 pl-lg-0 order-1 order-lg-2">
        <div className="footer_right_main">
          <div className="mt-4">
            <div className="title-1">
              Tell us about your project
            </div>
            <p className="contents">
              Let Us Help You Develop A Blockchain-Powered
              Business Solution
            </p>
            <form

              className="fitoutform"
              id="footer_new_form"

            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Your Name"

                  />
                </div>
                <input
                  type="hidden"
                  className="form-control"
                  defaultValue="footer_form_home"
                  name="category_name"
                />
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email"

                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <div className="selecpicker_input_group_div">
                    <select
                      className="selectpicker form-control select_icon_list"
                      name="country"
                      aria-label="Contact Details"


                    >
                      <option
                        data-icon="fa fa-phone"
                        value="mobile"
                      />
                      <option
                        data-icon="fab fa-whatsapp"
                        value="whatsapp"
                      />
                      <option
                        data-icon="fab fa-telegram"
                        value="telegram"
                      />
                    </select>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="telephone"

                      required
                    />
                    <input
                      type="hidden"
                      name="social_link_type_hidden"
                      defaultValue="mobile"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <div className="popup_country">
                    <select

                      className="form-control form_control_select select2country_popup"
                      name="country"
                      aria-label="Contact Details"

                    >
                      <option value hidden>
                        Select Country
                      </option>
                      <option value="Afghanistan" id="AF">
                        Afghanistan
                      </option>
                      <option value="Albania" id="AL">
                        Albania
                      </option>
                      <option value="Algeria" id="DZ">
                        Algeria
                      </option>

                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group msg_div">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={3}
                    id="footer_msg"
                    placeholder="Enter your subject"
                    defaultValue={""}

                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group text-center">
                  <div id="footer_form_error_msg" />
                  <button
                    className="btn footer_submit"
                    type="Submit"
                    id="footer_submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}








      <footer className="text-lg-start" style={{ backgroundColor: '#000000', textAlign: 'center' }}>
        <section style={{ background: '#010101' }}>
          <div className="container text-md-start mt-5">
            <div className="row mt-3 d-flex align-center">
              <div style={{ marginTop: '5vh' }} className="col-md-2 col-lg-2 col-xl-2 mx-auto footer_logo ">
                <div class="Company-logo">
                  <img style={{ marginBottom: 50, width: 400 }} className="Company-logo" src={imgage} alt />
                </div>
                <div className="payment-method">
                  <div className="image-container">
                    <img className="footer-in-payment-method" src={img64} alt />
                    <div className="overlay-text">Scan Me</div>
                    <p style={{ fontSize: 15, textAlign: 'center' }}>Save Contact Details</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p>
                  <a href="#projects" onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'is-checked' : ''}   ><span className="footer-in-Pages">ALL</span></a>
                </p>
                <p>
                  <a href="#projects" onClick={() => setSelectedCategory('Blockchain')} className={selectedCategory === 'Blockchain' ? 'is-checked' : ''}  ><span className="footer-in-Pages">BLOCKCHAIN</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Application')} className={selectedCategory === 'Application' ? 'is-checked' : ''}><span className="footer-in-Pages">APPLICATION</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('SoftWare')} className={selectedCategory === 'SoftWare' ? 'is-checked' : ''}><span className="footer-in-Pages">SOFTWARE</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Games')} className={selectedCategory === 'Games' ? 'is-checked' : ''}><span className="footer-in-Pages">GAMES</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Metaverse')} className={selectedCategory === 'Metaverse' ? 'is-checked' : ''} ><span className="footer-in-Pages">METAVERSE</span></a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p className="footer-contact-number">
                  <a href="#home"><span className="footer-in-Pages">HOME</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href='#service'><span className="footer-in-Pages">SERVICE</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects"><span className="footer-in-Pages">PROJECTS</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#clients"><span className="footer-in-Pages">CLIENTS</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#contact"><span className="footer-in-Pages">CONTACT</span></a>
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

export default Home
