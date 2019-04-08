import React from 'react';
import classes from './Services.module.scss';
import manicure from './images/manicure.png';
import pedicure from './images/pedicure.png';
import wax from './images/wax.png';


const Services = () => (
	<React.Fragment>
		<div className={classes.Wrapper}>
			<h1>Usluge</h1>
			<div className={classes.FlexWrapper}>
				<div className={classes.Manikir}>
					<img src={manicure} />
					<p className={classes.title}>Manikir</p>
					<p className={classes.about}>
						Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
						dolore mag.
					</p>
				</div>
				<div className={classes.Pedikir}>
					<img src={pedicure} />
					<p className={classes.title}>Pedikir</p>
					<p className={classes.about}>
						Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
						dolore mag.
					</p>
				</div>
				<div className={classes.Depilacija}>
					<img src={wax} />
					<p className={classes.title}>Depilacija</p>
					<p className={classes.about}>
						Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
						dolore mag.
					</p>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Services;
