import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Gallery.module.scss';

class Gallery extends Component {
	state = {
		imageNumber: 0,
		images: [
			'https://firebasestorage.googleapis.com/v0/b/burger-builder-f1606.appspot.com/o/1.jpg?alt=media&token=949ef593-2245-4910-a3b5-dd311f96e126',
			'https://firebasestorage.googleapis.com/v0/b/burger-builder-f1606.appspot.com/o/2.jpg?alt=media&token=b8cc7000-a38d-4a63-8f8e-27f4cf2bed2c',
			'https://firebasestorage.googleapis.com/v0/b/burger-builder-f1606.appspot.com/o/3.jpg?alt=media&token=bfcf298a-5ca0-4bee-bb8f-76d270a6c730',
			'https://firebasestorage.googleapis.com/v0/b/burger-builder-f1606.appspot.com/o/4.jpg?alt=media&token=f7c78a6f-08da-47ee-8f35-5f41687925b2',
			'https://firebasestorage.googleapis.com/v0/b/burger-builder-f1606.appspot.com/o/5.jpg?alt=media&token=12a8cb11-0bb9-4b60-8dbd-9603fad9e0fa'
		]
	};

	nextPictureEventHandler = () => {
		this.setState({ imageNumber: this.state.imageNumber + 1 });
		if (this.state.imageNumber === 4) {
			this.setState({ imageNumber: 0 });
		}
	};

	previousPictureEventHandler = () => {
		this.setState({ imageNumber: this.state.imageNumber - 1 });
		if (this.state.imageNumber === 0) {
			this.setState({ imageNumber: 4 });
		}
	};

	render() {
		const style = {
			backgroundImage: 'url(' + this.state.images[this.state.imageNumber] + ')'
		};

		return (
			<React.Fragment>
				<div style={style} className={classes.Gallery}>
					<div className={classes.Buttons}>
						<FontAwesomeIcon className={classes.Icon} onClick={this.previousPictureEventHandler} icon={faChevronCircleLeft} />
						<FontAwesomeIcon className={classes.Icon} onClick={this.nextPictureEventHandler} icon={faChevronCircleRight} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Gallery;
