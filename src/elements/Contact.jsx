import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import Breadcrumb from "./common/Breadcrumb";

import ContactImage from '../../public/custom-assets/contact.jpg';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>

                {/* Start Breadcrump Area */}
                {/* <Breadcrumb title={'Contact'} backgroundImage={ContactImage}/> */}
                {/* End Breadcrump Area */}


                <div className="rn-contact-top-area pb-0 ptb--120">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-12">
                            <div className="section-title text-left mb--50">
                                <h2 className="title" id="Contact">Contact Me</h2>
                            </div>
                            </div>
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Phone Number</h4>
                                        <p><a href="tel:+1929 340 3653">+1 (929) 340 3653</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_mobile--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:davydovjd611@gmail.com">davydovjd611@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>2622 Brown Street, 2nd Floor <br /> Brooklyn, NY 11235</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>

                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKey={{key: "AIzaSyByAYTxqpbJQjBfWMc2z_K9Q-fr331IzxI"}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div> */}
                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Brand Area */}
                
                
            </React.Fragment>
        )
    }
}
export default Contact