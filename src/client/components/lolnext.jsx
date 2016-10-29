import React, { Component } from 'react';
import { connect } from 'react-redux';



class NextLol extends Component {
	render() {
		return (
			<div className="App">
				<h1>NextLol is {this.props.name}!</h1>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		name: state.name
	}
}

export default connect(mapStateToProps)(NextLol);