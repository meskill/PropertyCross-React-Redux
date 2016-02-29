/**
 * Created by meskill on 29.02.2016.
 */

import Actions from '../constants/Actions';

export default function (state = [], action) {
	if (action.type == Actions.search.locations) {
		return action.locations;
	}
	return state;
}