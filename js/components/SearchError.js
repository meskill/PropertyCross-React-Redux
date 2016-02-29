/**
 * Created by meskill on 20.02.2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class SearchError extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="search-error">
				<p>
					{this.props.error}
				</p>
			</div>
		)
	}
}

SearchError.propTypes = {
	error: PropTypes.string
};

export default connect((state) => {
	return {error: state.error};
})(SearchError);