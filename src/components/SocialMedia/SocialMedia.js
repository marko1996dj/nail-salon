import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import classes from './SocialMedia.module.scss';

const SocialMedia = (props) => (
	<ul className={classes.SocialMedia}>
		<li>
			<a className={classes.Facebook} href="http://facebook.com" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faFacebook} />
			</a>
		</li>
		<li>
			<a className={classes.Instagram} href="http://instagram.com" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faInstagram} />
			</a>
		</li>
		<li>
			<a className={classes.Pinterest} href="http://twitter.com" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faPinterest} />
			</a>
		</li>
	</ul>
);

export default SocialMedia;
