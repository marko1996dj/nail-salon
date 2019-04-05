import React from 'react';
import classes from './NavbarItem.module.scss';


const NavbarItem = (props) => (
	<li className={classes.NavbarItem}>
		<a href={props.link}>{props.children}</a>
	</li>
);

export default NavbarItem;
