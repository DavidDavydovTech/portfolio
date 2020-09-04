import React, { Component } from "react";

import PhoneImage from '../../../public/custom-assets/phone.jpg'

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50 mt-1">
                                <p className="description">Not in the mood to call or write up a Email? Feel free to contact us via this form instead!</p>
                            </div>
                            <div className="form-wrapper">
                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            
                                            style={{backgroundColor: "lightgrey"}}
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                            disabled
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            
                                            style={{backgroundColor: "lightgrey"}}
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                            PhoneImage
                                            disabled
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            
                                            style={{backgroundColor: "lightgrey"}}
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                            PhoneImage
                                            disabled
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            className="disabled"
                                            type="text"
                                            id="item04"
                                            name="message"
                                            style={{backgroundColor: "lightgrey"}}
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                            PhoneImage
                                            disabled
                                        />
                                    </label>
                                    <button className="btn-secondary rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" PhoneImage disabled>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={PhoneImage} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;