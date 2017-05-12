import React,{Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {
	render(){
		if(!this.props.user){
			return (<h2>Select a User..</h2>)
		}
		return (
			<div>
				<h3>Name: {this.props.user.name}</h3>
				<h4>Location: {this.props.user.location}</h4>
				<h4>State: {this.props.user.state}</h4>
				<h4>School: {this.props.user.school}</h4>
				<h4>Stream: {this.props.user.stream}</h4>
			</div>
		);
	}
}

function mapStateToProps(state) { 
	return{
		user: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail)