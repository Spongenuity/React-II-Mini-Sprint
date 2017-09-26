import React, {Component} from 'react';
import './Person.css';

export default class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {},
			friends: [],
		};
	}

	componentDidMount() {
		this.setState({person: this.props.person, friends: this.props.person.friends})
	}

	render() {
		return (
			<div className="Person">
				<div>
					<div className="FN">{this.state.person.first_name}</div>
					<div className="LN">{this.state.person.last_name}</div>
					<div className="EM">{this.state.person.email}</div>
				</div>
			</div>
			)
	}
};