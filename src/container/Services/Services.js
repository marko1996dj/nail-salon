import React, { Component } from 'react';
import classes from './Services.module.scss';
import manicure from './images/manicure.png';
import pedicure from './images/pedicure.png';
import wax from './images/wax.png';


class Services extends Component {
	render() {
		return(
			<React.Fragment>
			<div className={classes.Wrapper}>
				<h1>Usluge</h1>
				<div className={classes.FlexWrapper}>
					<div className={classes.Manikir}>
						<img src={manicure} alt="manicure.png"/>
						<p className={classes.title}>manikir.</p>
						<p className={classes.about}>
							Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
							dolore mag.
						</p>
					</div>
					<div className={classes.Pedikir}>
						<img src={pedicure} alt="pedicure.png"/>
						<p className={classes.title}>pedikir.</p>
						<p className={classes.about}>
							Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
							dolore mag.
						</p>
					</div>
					<div className={classes.Depilacija}>
						<img src={wax} alt="wax.png" />
						<p className={classes.title}>depilacija.</p>
						<p className={classes.about}>
							Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
							dolore mag.
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
		);
	}
}

export default Services;
