import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || David J. Davydov  </title>
                    <meta name="description" content="David J. Davydov is an experence web developer in Brooklyn, New York." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
