/**
 * Created by meskill on 18.02.2016.
 */

import React from 'react';
import {connect} from 'react-redux';
import SearchPageConstants from '../constants/Constants';
import Actions from '../constants/Actions';
import nestopia from '../actions/nestopia';
import {Link} from 'react-router';

class SearchHeader extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="search">
				<div className="header">
					<div className="title">
						<Link to="/">
							<h1>
								{SearchPageConstants.title}
							</h1>
						</Link>
						<Link to="/favourites">
							<button>
								Favourites
							</button>
						</Link>
					</div>

					<div>
						<p>
							{SearchPageConstants.instruction}
						</p>
						<input ref="input">

						</input>
						<div>
							<button onClick={this.search.bind(this)}>
								Go
							</button>
							<button onClick={this.my_location.bind(this)}>
								My location
							</button>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}

	search(e) {
		if (this.refs.input.value)
			nestopia.search(this.refs.input.value);
	}

	my_location(e) {
		nestopia.search();
	}
}

export default connect()(SearchHeader);