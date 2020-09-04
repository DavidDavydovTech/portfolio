// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

//Header, Footer, and ScrollToTop.
import Header from './component/header/Header';
import Footer from './component/footer/FooterTwo';

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

import error404 from './elements/error404'
import HomePage from './pages/Home';
import AboutPage from './elements/About'
import BlogPage from './elements/Blog'
// import ServicePage from './block/ServiceDetails'
import ContactPage from './elements/Contact'

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



class Root extends Component{
    render(){
        return(
            // <BrowserRouter basename={'/'}>

            //     <Header/>

            //     <Switch>
            //         <Route exact path={`/`} component={HomePage}/>
            //         <Route exact path={`/about`} component={AboutPage}/>
            //         <Route exact path={`/blog`} component={BlogPage}/>
            //         {/* <Route exact path={`/pricing-table`} component={ServicePage}/> */}
            //         <Route exact path={`/contact`} component={ContactPage}/>
                    
            //         <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
            //         <Route component={error404}/>
            //     </Switch>

            //     {/* <Footer/> */}

            //     <div className="backto-top">
            //         <ScrollToTop showUnder={160}>
            //             <FiChevronUp />
            //         </ScrollToTop>
            //     </div>

            // </BrowserRouter>
            <>
            <BrowserRouter>
                <Header navButtons={[{
                        elementId: "elementAbout",
                        text: "About"
                    },{
                        elementId: "elementContact",
                        text: "Contact"
                }]}/>

                <HomePage/>
                <AboutPage/>
                <ContactPage/>

                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>

            </BrowserRouter>
                
            </>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();