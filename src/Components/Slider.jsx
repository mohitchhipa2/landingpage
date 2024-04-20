import React from "react";
import Slider from "react-slick";
import img1 from "../assets/img/brand1.png";
import img2 from "../assets/img/brand2.png";
import img3 from "../assets/img/brand3.png";
import img4 from "../assets/img/brand4.png";
import img5 from "../assets/img/brand5.webp";
import img6 from "../assets/img/brand6.jpg";
import img7 from "../assets/img/brand7.png";
import img8 from "../assets/img/brand8.png";
import img9 from "../assets/img/brand9.jpg";
import img10 from "../assets/img/brand10.png";

export default function SimpleSlider() {
    const brands = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        }, {
            image: img4
        }, {
            image: img5
        }, {
            image: img6
        }, {
            image: img7
        }, {
            image: img8
        }, {
            image: img9
        },
        {
            image: img10
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {brands.map((item, index) => (
                <div key={index}>
                    <img style={{ width: "100px", marginLeft: "70px" }} src={item.image} alt="" />
                </div>
            ))}
        </Slider>
    );
}
