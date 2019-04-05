import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import classes from './NavbarItems.module.scss';

const NavbarItems = (props) => (
	<ul className={classes.NavbarItems}>
		<NavbarItem link="about-us">about us</NavbarItem>
		<NavbarItem link="services">services</NavbarItem>
		<NavbarItem link="gallery">gallery</NavbarItem>
		<NavbarItem link="contacts">contacts</NavbarItem>
	</ul>
);

export default NavbarItems;
