import React, { Component , Fragment } from "react";


import Helmet from "../component/common/Helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Brand from "../elements/Brand";
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import About from "../elements/About"


import BrooklynPicture from "../../public/custom-assets/brooklyn.jpg"
import CityPicture from '../../public/custom-assets/city.jpg'

console.log(BrooklynPicture)
console.log(`url(${BrooklynPicture})`)

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Brooklyn Special',
        description: (<>For a limited time only all local businesses and clients in Brookyn only pay <b className="theme-gradient">$250</b> in labor fees for basic websites.</>),
        buttonText: 'Learn More',
        buttonLink: '#Promo'
    },
]
class HomePortfolio extends Component{
    render(){
        const sliderSettings = {
            autoplay: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <Fragment> 
                <Helmet pageTitle="Home Portfolio" />

                

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                <Slider {...sliderSettings}>
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <>
                            <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image" key={index} data-black-overlay="6" style={{backgroundImage: `url("${BrooklynPicture}")`}}>
                                <div className="container" >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><AnchorLink href={value.buttonLink} className="rn-button-style--2 btn-primary-color">{value.buttonText}</AnchorLink></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    {/* End Single Slide */}
                </Slider>
                </div>
                

                {/* Start portfolio Area  */}
                {/* <div className="rn-portfolio-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">Our Project</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row">
                            <PortfolioMasonry item="9" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="view-more-btn mt--60 text-center">
                                    <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End portfolio Area  */}



                {/* Start Brand Area */}
                {/* <div className="rn-brand-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">Our Clients</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <Brand branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </Fragment>
        )
    }
}
export default HomePortfolio;