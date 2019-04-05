import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import classes from './SocialMedia.module.scss';

const SocialMedia = (props) => (
	<ul className={classes.SocialMedia}>
		<li>
			<FontAwesomeIcon icon={faFacebook} />
		</li>
		<li>
			<FontAwesomeIcon icon={faInstagram} />
		</li>
		<li>
			<FontAwesomeIcon icon={faTwitter} />
		</li>
	</ul>
);

export default SocialMedia;
