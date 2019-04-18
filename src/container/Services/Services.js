import React, { Component } from 'react';
import classes from './Services.module.scss';

class Services extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.Wrapper}>
					<h1>usluge.</h1>
					<div className={classes.FlexWrapper}>
						<div className={classes.Manikir}>
							<p className={classes.title}>nega ruku.</p>
							<table>
								<tbody>
									<tr>
										<td className={classes.text}>manikir</td>
										<td>500,00</td>
									</tr>
									<tr>
										<td className={classes.text}>lakiranje</td>
										<td>600,00</td>
									</tr>
									<tr>
										<td className={classes.text}>gel lak</td>
										<td>800,00</td>
									</tr>
									<tr>
										<td className={classes.text}>gel</td>
										<td>1.200,00</td>
									</tr>
									<tr>
										<td className={classes.text}>korekcija</td>
										<td>1.200,00</td>
									</tr>
									<tr>
										<td className={classes.text}>frenc</td>
										<td>1.400,00</td>
									</tr>
									<tr>
										<td className={classes.text}>nadogradnja</td>
										<td>1.500,00</td>
									</tr>
									<tr>
										<td className={classes.text}>izlivanje</td>
										<td>2.000,00</td>
									</tr>
									<tr>
										<td className={classes.text}>nokat</td>
										<td>180,00</td>
									</tr>
									<tr>
										<td className={classes.text}>izlivanje nokta</td>
										<td>200,00</td>
									</tr>
									<tr>
										<td className={classes.text}>ojacavanje prirodnih<br></br> noktiju</td>
										<td>1.000,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className={classes.Pedikir}>
							<p className={classes.title}>nega nogu.</p>
							<table>
								<tbody>
									<tr>
										<td className={classes.text}>pedikir</td>
										<td>800,00</td>
									</tr>
									<tr>
										<td className={classes.text}>lak</td>
										<td>1.200,00</td>
									</tr>
									<tr>
										<td className={classes.text}>gel</td>
										<td>1.700,00</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className={classes.Depilacija}>
							<p className={classes.title}>depilacija.</p>
							<table>
								<tbody>
									<tr>
										<td className={classes.text}>noge</td>
										<td className={classes.text}>cele</td>
										<td>1.200,00</td>
									</tr>
									<tr>
										<td className={classes.text} />
										<td className={classes.text}>pola</td>
										<td>600,00</td>
									</tr>
									<tr>
										<td className={classes.text} />
										<td className={classes.text}>prepone</td>
										<td>350,00</td>
									</tr>
									<tr>
										<td className={classes.text}>ruke</td>
										<td className={classes.text}>cele</td>
										<td>500,00</td>
									</tr>
									<tr>
										<td className={classes.text} />
										<td className={classes.text}>pola</td>
										<td>250,00</td>
									</tr>
									<tr>
										<td className={classes.text}>stomak</td>
										<td />
										<td>300,00</td>
									</tr>
									<tr>
										<td className={classes.text}>nausnice</td>
										<td />
										<td>300,00</td>
									</tr>
									<tr>
										<td className={classes.text}>cupanje obrva</td>
										<td />
										<td>350,00</td>
									</tr>
									<tr>
										<td className={classes.text}>pazuh</td>
										<td />
										<td>400,00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Services;
