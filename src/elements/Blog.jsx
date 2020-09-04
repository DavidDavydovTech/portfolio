import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";

import BlogPicture from "../../public/custom-assets/blog.jpg"


class Blog extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Blog' />

                <Breadcrumb title={'Blogs'} backgroundImage={BlogPicture}/>

                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                        <h2 style={{textAlign: "center"}}>Blog coming soon!</h2>

                        {/* <BlogList />
                        <div className="row mt--20">
                            <div className="col-lg-12">
                                <Pagination />
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* End Blog Area */}

            </React.Fragment>
        )
    }
}
export default Blog;
