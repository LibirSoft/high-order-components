import React, {Component} from 'react';
import LoaderHoc from './LoaderHoc.js';

class Users extends Component {
	render() {
		return (
			<div>
				{
					this.props.users.map(user =>
						<div key={user.id}>
							{ user.name }
						</div>
					)
				}
			</div>
		);
	}
}

export default LoaderHoc(Users,"users");