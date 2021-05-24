import React, {Component} from 'react';
import LoaderHoc from './LoaderHoc.js';

class Posts extends Component {
	render() {
		return (
			<div>
				{
					this.props.posts.map(post =>
						<div key={post.id}>
							{ post.title }
						</div>
					)
				}
			</div>
		);
	}
}

export default LoaderHoc(Posts);