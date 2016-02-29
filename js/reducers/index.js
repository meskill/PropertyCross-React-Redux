/**
 * Created by meskill on 29.02.2016.
 */

import error from './error';
import favourites from './favourites';
import locations from './locations';
import recent from './recent';
import results from './results';
import description from './description';
import {combineReducers} from 'redux';

export default combineReducers({error, favourites, locations, recent, results, description});