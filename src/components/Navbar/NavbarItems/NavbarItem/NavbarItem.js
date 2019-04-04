import React from 'react';

const NavbarItem = (props) => (
	<li>
		<a href={props.link}>{props.children}</a>
	</li>
);

export default NavbarItem;
