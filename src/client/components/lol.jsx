import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Lol extends Component {
	render() {
		return (
			<div className="App">
				<h1>Lol is {this.props.name}!</h1>
				<Link to='/nextlol'>nextlol</Link>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		name: state.name
	}
}

export default connect(mapStateToProps)(Lol)