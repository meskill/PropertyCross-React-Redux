/**
 * Created by meskill on 29.02.2016.
 */

import Actions from '../constants/Actions';

export default function (state = {}, action) {
	if (action.type == Actions.search.result) {
		let new_state = Object.assign({}, state);
		if (action.search == state.search) {
			if (action.page > 1)
				new_state.results = state.results.concat(action.results);
		} else {
			new_state.results = action.results;
			new_state.total_length = action.total_length;
			new_state.search = action.search;
		}
		return new_state;
	}
	return state;
}