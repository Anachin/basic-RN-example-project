import React, { Component } from 'react';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';

class AppNavigator extends Component {

	constructor(props) {
    	super(props);
	}

	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="Login"
						initial component={Login}
						hideNavBar={true}
						sceneStyle={{backgroundColor: '#1abc9c'}}/>
				</Scene>

				<Scene key="Home"
					component={Home} hideNavBar={false}
					title="Home"/>
			</Router>
		);
	}
}

export default AppNavigator;
