import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/NailSalonLogo';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import AboutUs from '../../components/Layout/AboutUs/AboutUs';
import Services from '../../components/Layout/Services/Services';
import Gallery from '../../components/Layout/Gallery/Gallery';
import Contact from '../../components/Layout/Contact/Contact';


class NailSaloon extends Component {
    render () {
        return (
            <React.Fragment>
                <Navbar />
                <Logo />
                <Route path="/" exact render={()=> <AboutUs />} />
                <Route path="/about-us" exact render={()=> <AboutUs />} />
                <Route path="/services" exact render={()=> <Services />} />
                <Route path="/gallery" exact render={()=> <Gallery />} />
                <Route path="/contacts" exact render={()=> <Contact />} />
                <SocialMedia />
            </React.Fragment>
        );
    }
} 

export default NailSaloon;