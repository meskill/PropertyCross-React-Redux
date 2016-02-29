/**
 * Created by meskill on 22.02.2016.
 */

import Actions from '../constants/Actions';
import nestopia from '../actions/nestopia';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SearchLocation extends React.Component {

	render() {
		return (
			<div className="search-locations">
				<h3>Please select a location below: </h3>
				<ul>
					{this.props.locations.map((location, index) => {
						return (
							<li key={index}>
								<button onClick={this.search.bind(this)}>
									{location.title}
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}

	search(e) {
		nestopia.search(e.currentTarget.innerText);
	}
}

SearchLocation.propTypes = {
	locations: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	})).isRequired
};

export default connect(state => {
	return {locations: state.locations}
})(SearchLocation);