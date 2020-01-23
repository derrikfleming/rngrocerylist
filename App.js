/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';

import { LOCAL_HOSTS_IP } from 'react-native-dotenv';

Meteor.connect(`ws://${LOCAL_HOSTS_IP}:3000/websocket`);

import GroceryList from './components/GroceryList';

export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<GroceryList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});
