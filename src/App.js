import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NailSalon from './container/NailSalon/NailSalon';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NailSalon />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
