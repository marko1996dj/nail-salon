import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/NailSalonLogo';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

class NailSaloon extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Logo />
				<Switch>
					<Route path="/" exact render={() => <AboutUs />} />
					<Route path="/about-us" exact render={() => <AboutUs />} />
					<Route path="/services" exact render={() => <Services />} />
					<Route path="/gallery" exact render={() => <Gallery />} />
					<Route path="/contacts" exact render={() => <Contact />} />
				</Switch>
				<SocialMedia />
			</React.Fragment>
		);
	}
}

export default NailSaloon;
