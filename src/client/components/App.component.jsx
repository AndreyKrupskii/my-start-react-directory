import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './App.component.scss';

class App extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		console.log('RENDER!!!')
		return (
			<div className="App">
				<h1>Hello {this.props.name}!</h1>
				<Link to="/nextlol"> Go to lol </Link>
				{this.props.children}
			</div>
			);
	}
}

function mapStateToProps(state){

	return state
}

export default connect(mapStateToProps)(App)