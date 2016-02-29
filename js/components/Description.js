/**
 * Created by meskill on 24.02.2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Constants from '../constants/Constants';
import router from '../actions/router';

class Description extends React.Component {

	render() {
		let result = this.props.description;
		return (
			<div className="description">
				<h1>{Constants.description}</h1>
				<button onClick={this.click.bind(this, result)}>+</button>
				<div id="clear"/>
				${result.price}<br/>
				{result.title.split(',').slice(0, 2).join(',')}<br/>
				<div id="img">
					<img src={result.img_url}></img><br/>
				</div>
				{result.bedroom_number} bed(s), {result.bathroom_number} bathroom(s)<br/>
				{result.summary}
			</div>
		)
	}

	click(value, e) {
		router.add_favourites(value);
	}
}

Description.propTypes = {
	description: PropTypes.object.isRequired
};

export default connect((store) => {
	return {description: store.description};
})(Description);