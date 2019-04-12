import React, { Component } from 'react';
import classes from './NavbarItem.module.scss';

class NavbarItem extends Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}
	render() {
		const { classname, link, children } = this.props;

		return (
			<li className={classes.NavbarItem}>
				<a className={classes[classname]} href={link}>
					{children}
				</a>
			</li>
		);
	}
}

export default NavbarItem;
