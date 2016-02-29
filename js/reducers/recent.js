/**
 * Created by meskill on 29.02.2016.
 */

import config from '../config';
import Actions from '../constants/Actions';

export default function (state = [], action) {
	if (action.type == Actions.search.result) {
		if (!state.some((search) => {
				if (search.search == action.search) {
					search.total_length = action.total_length;
					return true
				}
				return false;
			})) {
			return state.concat([{search: action.search, total_length: action.total_length}]).slice(-config.recentSearchesCount);
		}
	}
	return state;
}