import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import classes from './NavbarItems.module.scss';

const NavbarItems = () => (
	<ul className={classes.NavbarItems}>
		<NavbarItem classname="AboutUs" link="about-us">o nama.</NavbarItem>
		<NavbarItem classname="Services" link="services">usluge.</NavbarItem>
		<NavbarItem classname="Gallery" link="gallery">galerija.</NavbarItem>
		<NavbarItem classname="Contacts" link="contacts">kontakt.</NavbarItem>
	</ul>
);

export default NavbarItems;
