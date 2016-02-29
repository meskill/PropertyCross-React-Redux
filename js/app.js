/**
 * Created by meskill on 18.02.2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './core/store';
import SearchHeader from './components/SearchHeader';
import SearchInitial from './components/SearchInitial';
import SearchError from './components/SearchError';
import SearchLocation from './components/SearchLocation';
import SearchResult from './components/SearchResult';
import Description from './components/Description';
import Favourites from './components/Favourites';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={SearchHeader}>
						<Route path="error" component={SearchError}/>
						<Route path="locations" component={SearchLocation}/>
						<IndexRoute component={SearchInitial}/>
					</Route>
					<Route path="/result" component={SearchResult}/>
					<Route path="/description" component={Description}/>
					<Route path="/favourites" component={Favourites}/>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));