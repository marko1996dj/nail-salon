import React, { Component } from 'react';
import classes from './Contact.module.scss';

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.Contact}>
					<div className={classes.Left}>
						<h1>radno vreme.</h1>
						<table className={classes.Time}>
							<tbody>
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
							</tbody>
						</table>
						<table className={classes.Info}>
							<tbody>
								<tr>
									<td>adresa:</td>
									<td>dragise brasovana 14</td>
								</tr>
								<tr>
									<td>telefon:</td>
									<td>+381 69 1514 762</td>
								</tr>
								<tr>
									<td>e-mail:</td>
									<td>ibeauty@gamil.com</td>
								</tr>
							</tbody>
						</table>
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
