import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { createStore, bindActionCreators } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider, connect } from 'react-redux';
import reducers from './Reducers';

import AppNavigator from './Components/AppNavigator';

const store = createStore(reducers, undefined, autoRehydrate());

class App extends Component {

	constructor(props) {
	  super(props);
	  
	  this.state = {
	    isLoading: true
	  };
	}

	componentWillMount() {
	    const config = {
	      storage: AsyncStorage,
	      whitelist: ['user'] 
	    };

	    const callback = () => { this.setState({isLoading: false}); }

	    this.persistor = persistStore(store, config, callback);
  	}

	render() {
		if(this.state.isLoading) {
	      return null;
	    }
	    
		return (
			<Provider store={store} persistor={this.persistor}>
        		<AppNavigator />
      		</Provider>
		);
	}
}

export default App;