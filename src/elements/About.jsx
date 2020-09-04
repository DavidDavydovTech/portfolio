import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import CounterOne from "../elements/counters/CounterOne";
import { FaBootstrap, FaAngular, FaReact, FaJsSquare, FaNpm, FaNodeJs, FaSass, FaHtml5 } from 'react-icons/fa';

import CityPicture from '../../public/custom-assets/city.jpg'

import AnchorLink from 'react-anchor-link-smooth-scroll'

class About extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Home' />
                
                {/* Start Breadcrump Area */}
                {/* <Breadcrumb title={'About'} backgroundImage={AboutPicture} /> */}
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title" id="About">About Me</h2>
                                            <p className="description">An experenced developer who specilizes in MERN full stack development, have experence developing for many platforms and using many frameworks / libraries. Developing everything from static websites to complex CRUD applications.</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">An Impressive Skill Set</h3>
                                                    <p>I know everything a developer could need to know for making a fullstack website. Besides for the MERN stack I also know MySQL, Angular, JQuery, Regex, and other related skills.</p>
                                                    <div className="d-flex justify-content-center pt-4" style={{height: "100%"}}>
                                                    
                                                        <FaHtml5 size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaSass size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaBootstrap size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaJsSquare size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaNodeJs size={"2rem"} className="ml-2 mr-2"/>
                                                        
                                                    </div>
                                                    <div className="d-flex justify-content-center mt-2 mb-5" style={{height: "100%"}}>
                                                    
                                                        <FaNpm size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaReact size={"2rem"} className="ml-2 mr-2"/>
                                                        <FaAngular size={"2rem"} className="ml-2 mr-2"/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">An Advanced Development History</h3>
                                                    <p>From a young age I dabbled in development. Programming in Actionscript since I was 12, I've come a long way since then and have worked with everything from old deprecated community-made tools like Cannon to industry defining tools like Photoshop and Illustrator. I have a genuine love and interest for the art of development and design.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">My Experence</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne data={[
                                {
                                    countNum : 1000,
                                    countTitle: 'Hours of professional development experence. From websites, to apps, to everything in between.',
                                },
                                {
                                    countNum : 15,
                                    countTitle: 'Satisfied freelance clients. With skills and deals like these this is the number that keeps on growing.',
                                },
                                {
                                    countNum : 17,
                                    countTitle: 'Libraries & frameworks learned. Whether you need MySQL or MongoDB, or you need React or Angular, I\'m here.',
                                },
                            ]}
                        />
                    </div>
                </div>
                {/* End CounterUp Area */}
                

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1 pt-5 mb-5" id="Promo">
                    <div className="inner">
                        <div className="content-wrapper" >
                            <div className="content">
                                <h4 className="theme-gradient">Giving Back to Brooklyn</h4>
                                <p>Carried away from the city by the ebb and flow of life, Brooklyn has always been a point of return for me ever since I was born here. After returning to Brooklyn yet again I've decided its time to give back to the city. Local businesses and clients only pay <b className="theme-gradient">$250</b> dollars for the cost of labor on streamlined development for static websites.</p>
                                <AnchorLink href='#Contact' className="rn-btn btn-white">Inquire</AnchorLink>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src={CityPicture} alt="City"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        
                        <Testimonial />
                    </div>
                </div> */}



            </React.Fragment>
        )
    }
}
export default About