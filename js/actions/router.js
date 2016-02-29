/**
 * Created by meskill on 24.02.2016.
 */

import {browserHistory} from 'react-router';
import store from '../core/store';
import Actions from '../constants/Actions';

export default {
	error: (error)=> {
		store.dispatch({
			type: Actions.search.error,
			error: error
		});
		browserHistory.push('/error')
	},

	locations: (locations)=> {
		store.dispatch({
			type: Actions.search.locations,
			locations: locations
		});
		browserHistory.push('/locations')
	},

	result: (results)=> {
		store.dispatch(Object.assign({type: Actions.search.result}, results));
		browserHistory.push('/result')
	},

	description: (obj) => {
		store.dispatch({type: Actions.description, description: obj});
		browserHistory.push('/description/');
	},

	add_favourites: (value) => store.dispatch({type: Actions.favourites.add, value: value}),

	favourites: ()=>browserHistory.push('/favourites')
}