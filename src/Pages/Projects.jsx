import React, { useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
import ProjectDetails from './ProjectDetails'

const Projects = () => {
    const navigate = useNavigate("")

    const portfolioItems = [
        {
            id: 1,
            category: ["Blockchain"],
            title: 'E-Commerce Website',
            image: img1,
            subtitle: 'development'
        },
        {
            id: 2,
            category: ["Application"],
            title: 'Dating App',
            image: img2,
            subtitle: 'design',
        },
        {
            id: 3,
            category: ["Application"],
            title: 'Astrology App',
            image: img3,
            subtitle: 'art'
        },
        {
            id: 4,
            category: ["SoftWare"],
            title: 'Matrimonial SoftWare',
            image: img4,
            subtitle: 'Photoshop'
        },
        {
            id: 5,
            category: ["SoftWare"],
            title: 'Social Media Portal',
            image: img5,
            subtitle: 'development'
        },
        {
            id: 6,
            category: ["SoftWare"],
            title: 'LMS SoftWare',
            image: img6,
            subtitle: 'SoftWare'
        },
        {
            id: 7,
            category: ["Application"],
            title: 'Food Delivery',
            image: img7,
            subtitle: 'Application'
        },
        {
            id: 8,
            category: ["SoftWare"],
            title: 'School Management',
            image: img8,
            subtitle: 'SoftWare'
        },
        {
            id: 9,
            category: ["SoftWare"],
            title: 'CLinic Management',
            image: img9,
            subtitle: 'SoftWare'
        },
        {
            id: 10,
            category: ["SoftWare"],
            title: 'Job Portal',
            image: img10,
            subtitle: 'development'
        },
        {
            id: 11,
            category: ["SoftWare"],
            title: 'Reacharge Portal',
            image: img11,
            subtitle: 'design'
        },
        {
            id: 12,
            category: ["SoftWare"],
            title: 'MLM SoftWare',
            image: img12,
            subtitle: 'art'
        },
        {
            id: 13,
            category: ["SoftWare"],
            title: 'ERP SoftWare',
            image: img13,
            subtitle: 'development'
        },
        {
            id: 14,
            category: ['design'],
            title: 'Reacharge Portal',
            image: img14,
            subtitle: 'design'
        },
        {
            id: 15,
            category: ["SoftWare"],
            title: 'MLM SoftWare',
            image: img15,
            subtitle: 'art'
        },
        {
            id: 16,
            title: "Quiz System",
            image: img16,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 17,
            title: "CRM SoftWare",
            image: img17,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 18,
            title: "HRM SoftWare",
            image: img18,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 19,
            title: "HRMS SoftWare",
            image: img19,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 20,
            title: "Accounting SoftWare",
            image: img20,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 21,
            title: "POS SoftWare",
            image: img21,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 22,
            title: "Employee Tracking",
            image: img22,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 23,
            title: "Inventory SoftWare",
            image: img23,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 24,
            title: "WareHouse SoftWare",
            image: img24,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 25,
            title: "University Management",
            image: img25,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 26,
            title: "LMS Application",
            image: img26,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 27,
            title: "Coaching Management",
            image: img27,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 28,
            title: "Library Management",
            image: img28,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 29,
            title: "News Portal",
            image: img29,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 30,
            title: "Blogging Website",
            image: img30,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 31,
            title: "Project Management",
            image: img31,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 32,
            title: "Task Management",
            image: img32,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 33,
            title: "Online Streaming",
            image: img33,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 34,
            title: "Audio Podcast",
            image: img34,
            category: ["SoftWare"],
            subtitle: "development"
        },
        {
            id: 35,
            title: "E-Book SoftWare",
            image: img35,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 36,
            title: "Hospital Management",
            image: img36,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 37,
            title: "Lab Management",
            image: img37,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 38,
            title: "Doctor Appointment",
            image: img38,
            category: ["Software"],
            subtitle: "SoftWare"
        },
        {
            id: 39,
            title: "Pharmacy Management",
            image: img39,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 40,
            title: "AC Repairing",
            image: img40,
            category: [],
            subtitle: "development"
        },
        {
            id: 41,
            title: "Advocate Management",
            image: img41,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 42,
            title: "Affilate Management",
            image: img42,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 43,
            title: "Algo Trading",
            image: img43,
            category: ['Games', 'Application'],
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
            id: 46,
            title: "Cattle Manager",
            image: img46,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 47,
            title: "Courier System",
            image: img47,
            category: ["SoftWare"],
            subtitle: "SoftWare"
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
            id: 50,
            title: "Dairy Farm ",
            image: img50,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 51,
            title: "EV Charging",
            image: img51,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 52,
            title: "Event Management",
            image: img52,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 53,
            title: "Flight Booking",
            image: img53,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 54,
            title: "Garage Workshop",
            image: img54,
            category: [],
            subtitle: "development"
        },
        {
            id: 55,
            title: "Grocery",
            image: img55,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 56,
            title: "Gym Management",
            image: img56,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 57,
            title: "Hotel Management",
            image: img57,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 58,
            title: "LiveStock Management",
            image: img58,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 59,
            title: "Loan Management",
            image: img59,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 60,
            title: "Lodder Booking",
            image: img60,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 61,
            title: "Logistic System",
            image: img61,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 62,
            title: "Metatrade Trading",
            image: img62,
            category: ['Games', 'Application'],
            subtitle: "Application"
        },
        {
            id: 63,
            title: "Movie Ticket Booking",
            image: img63,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 64,
            title: "NGO Management",
            image: img64,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 65,
            title: "Property Management",
            image: img65,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 66,
            title: "PG Management",
            image: img66,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 67,
            title: "Property Listing",
            image: img67,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 68,
            title: "Property Management",
            image: img68,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 69,
            title: "Real EState",
            image: img69,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 70,
            title: "Ride Sharing",
            image: img70,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 71,
            title: "Saloon Management",
            image: img71,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 72,
            title: "Spa Management",
            image: img72,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 73,
            title: "Sport Management",
            image: img73,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 74,
            title: "Tiffin Center",
            image: img74,
            category: ["Application"],
            subtitle: "Application"
        },
        {
            id: 75,
            title: "Trading App",
            image: img74,
            category: ['Games', "Application"],
            subtitle: "Application"
        },
        {
            id: 76,
            title: "Travel Booking",
            image: img75,
            category: ["Application"],
            subtitle: "Application"
        },

        {
            id: 77,
            title: "Vehicle Management",
            image: img77,
            category: ["SoftWare"],
            subtitle: "SoftWare"
        },
        {
            id: 78,
            title: "Vehicle Tracking",
            image: img78,
            category: ["Application"],
            subtitle: "Application"
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


    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPortfolioItems =
        selectedCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category.includes(selectedCategory));

    return (
        <div>
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
                                                            <Link to={`/project-details/${item.id}`}>
                                                                <img style={{ height: "40vh" }} src={item.image} alt={item.title} />
                                                            </Link>
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

                </div>
            </div>



        </div>
    )
}

export default Projects
