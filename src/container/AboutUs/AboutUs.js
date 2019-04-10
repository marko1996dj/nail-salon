import React, { Component } from 'react';
import classes from './AboutUs.module.scss';

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.AboutUs}>
					<div className={classes.AboutUsPicture} />
					<div className={classes.AboutUsText}>
						<h1>Unlimited Luxury for Mind, Body & Soul</h1>
						<p className={classes.White}>
							Sepsumquia dolor sitmet conse tequam eiusmodise tempora incidunt utabore miase
						</p>
						<p>
							Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora incidunt utabore
							miase et dolore magnam. Naliquam quaerat voleneni fislaroa ullam corporis suscipit labasic
							ut aliqlnea commodi consequatur feruas.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default AboutUs;
