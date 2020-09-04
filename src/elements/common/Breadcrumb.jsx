import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component{
    render(){

        return(
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_image" style={{backgroundImage: `url(${this.props.backgroundImage})`}} data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 className="title">{this.props.title}</h2>
                                    <ul className="page-list">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                        {this.props.parent? <li className="breadcrumb-item">{this.props.parent}</li>:''}
                                        <li className="breadcrumb-item active">{this.props.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

