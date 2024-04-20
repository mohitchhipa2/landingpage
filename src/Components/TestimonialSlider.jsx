import React from "react";
import Slider from "react-slick";

export default function TestimonialSlider() {
    const testimonials = [
        {
            country: "USA",
            content: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
            name: "Darun Due",
            designation: "Web Developer",
            image: "https://thumbs.dreamstime.com/b/head-shot-portrait-smiling-businessman-wearing-suit-looking-camera-confident-glasses-profile-picture-successful-executive-204723095.jpg"
        },
        {
            country: "INDIA",
            content: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
            name: "Mohima Ale",
            designation: "App Developer",
            image: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
        },
        {
            country: "Bangladesh",
            content: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
            name: "John Roni",
            designation: "App Developer",
            image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index}>
                    <div className="row rainbow-slick-dot rainbow-slick-arrow testimonial-activation mt--60">
                        <div className="col-lg-12">
                            <div className="testimonial-style-two" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                                <div className="row align-items-center row--20">
                                    <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                        <div className="content mt_sm--40">
                                            <span className="form">{testimonial.country}</span>
                                            <p className="description">{testimonial.content}</p>
                                            <div className="client-info">
                                                <h4 className="title">{testimonial.name}</h4>
                                                <h6 className="subtitle">{testimonial.designation}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                        <div className="thumbnail"><img className="w-100" src={testimonial.image} alt="Corporate Template" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
