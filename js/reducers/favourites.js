/**
 * Created by meskill on 29.02.2016.
 */

import Actions from '../constants/Actions';

export default function (state = [], action) {
	if (action.type == Actions.favourites.add) {
		if (state.every((fav) => fav.guid !== action.value.guid)) {
			return state.concat([action.value]);
		}
	}
	return state;
}