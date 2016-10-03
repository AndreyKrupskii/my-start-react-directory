import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.component.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello {this.props.name}!</h1>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		name: state.name
	}
}

export default connect(mapStateToProps)(App)