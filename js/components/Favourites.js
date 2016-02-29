/**
 * Created by meskill on 24.02.2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Constants from '../constants/Constants';
import router from '../actions/router';
import SearchResult from './SearchResult';

class Favourites extends React.Component {

	render() {
		return (
			<div className="favourites">
				<table>
					<caption>
						{Constants.favourites}
					</caption>
					<tbody>
					{this.props.favourites.map(SearchResult.WrappedComponent.prototype.renderRow.bind(this))}
					</tbody>
				</table>
			</div>
		)
	}

	click(index, e) {
		router.description(this.props.favourites[index]);
	}
}

Favourites.propTypes = {
	favourites: PropTypes.array.isRequired
};

export default connect(state => {
	return {favourites: state.favourites};
})(Favourites);