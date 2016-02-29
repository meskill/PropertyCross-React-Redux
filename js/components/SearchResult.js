/**
 * Created by meskill on 19.02.2016.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import nestopia from '../actions/nestopia';
import router from '../actions/router';

class SearchResult extends React.Component {

	constructor() {
		super();
		this.state = {loading: false};
	}

	componentWillReceiveProps() {
		this.setState({loading: false});
	}

	render() {
		return (
			<div className="result">
				<table>
					<caption>
						{this.props.results.length} of {this.props.total_length}
					</caption>
					<tbody>
					{this.props.results.map(this.renderRow.bind(this))}
					</tbody>
				</table>
				{this.props.results.length < this.props.total_length ?
					(this.state.loading ?
						'Loading...' : <button onClick={this.load_more.bind(this)}>Load more...</button>)
					: null}
			</div>
		);
	}

	renderRow(result, index) {
		return (
			<tr key={index} onClick={this.click.bind(this, index)}>
				<td>
					<img src={result.img_url}></img>
				</td>
				<td>
					<div>
						<p>${result.price}</p>
						<p>{result.keywords}</p>
					</div>
				</td>
			</tr>
		);
	}

	click(index, e) {
		router.description(this.props.results[index]);
	}

	load_more(e) {
		this.setState({loading: true});
		nestopia.load_more();
	}
}

SearchResult.propTypes = {
	results: PropTypes.array.isRequired,
	total_length: PropTypes.number
};

export default connect(state => {
	return {
		results: state.results.results,
		total_length: state.results.total_length
	}
})(SearchResult);