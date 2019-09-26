import React from 'react';

class Content extends React.Component {
	render() {
		return (
			<div className="Content">
				<h1>{this.props.state.subject}</h1>
			</div>
		);
	}
}

export default Content;
