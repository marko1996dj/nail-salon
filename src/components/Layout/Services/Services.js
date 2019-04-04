import React from 'react';
import classes from './Services.module.scss';

const Services = () => (
	<React.Fragment>
		<div>
			<h1>Services Overview</h1>
			<div className={classes.Wrapper}>
				<div className={classes.Manikir}>
					<p className={classes.title}>Sepsumquia dolor sitmet conse tequam.</p>
					<p className={classes.about}>
						Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
						dolore mag.
					</p>
				</div>
				<div className={classes.Pedikir}>
					<p className={classes.title}>Quia dolor sitmet conse tequam lore.</p>
					<p className={classes.about}>
						Dastqui dolorem ipsumquia dolor sitmet conse tequam eius. Asmodi tempora cidunt utabore miase et
						dolore mag.
					</p>
				</div>
				<div className={classes.Depilacija}>
					<p className={classes.title}>Lorem ipsum dolor sit amet, consectetu.</p>
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
