import React, { Component } from 'react';
import classes from './Contact.module.scss';

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.Contact}>
					<div className={classes.Left}>
						<h1>radno vreme</h1>
						<table>
							<tr>
								<td>ponedeljak</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>utorak</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>sreda</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>cetvrtak</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>petak</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>subota</td>
								<td>08:00 - 16:00</td>
							</tr>
							<tr>
								<td>nedelja</td>
								<td>08:00 - 16:00</td>
							</tr>
						</table>

						<p>adresa: dragise brasovana 14</p>
						<p>broj telefona: +381 62 649 772</p>
						<p>e-mail: nail.salon@gmail.com</p>
					</div>
					<div className={classes.Right}>
						<div className={classes.Image} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Contact;
