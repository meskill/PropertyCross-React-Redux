/**
 * Created by meskill on 18.02.2016.
 */

import nestopia from '../actions/nestopia';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SearchInitial extends React.Component {
	render() {
		return (
			<div className="recent-search">
				<h3>Recent Searches: </h3>
				<ul>
					{this.props.recentSearches.map((search) => {
						return (
							<li key={search.search}>
								<button onClick={this.recent} data={search.search}>
									{search.search} ({search.total_length})
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}

	recent(e) {
		nestopia.search(e.currentTarget.getAttribute('data'));
	}
}

SearchInitial.propTypes = {
	recentSearches: PropTypes.arrayOf(PropTypes.shape({
		search: PropTypes.string.isRequired,
		total_length: PropTypes.number.isRequired
	})).isRequired
};

export default connect((state) => {
	return {recentSearches: state.recent};
})(SearchInitial);