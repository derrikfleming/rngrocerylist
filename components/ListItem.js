import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import ItemControls from './ItemControls';
import Colors from '../constants/Colors';

const ListItem = props => {
	return (
		<View style={styles.item}>
			<View style={styles.data}>
				<Text style={styles.itemName}>{props.itemName}</Text>
				<Text style={styles.itemQty}>{props.itemQty}</Text>
			</View>
			<View style={styles.controls}>
				<ItemControls
					id={props.itemId}
					qty={props.itemQty}
					decrement={props.decrementItem}
					increment={props.incrementItem}
					delete={props.deleteItem}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		height: 125,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
		margin: 20,
		padding: 10
	},
	data: {
		flex: 3,
		paddingTop: 8,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	itemName: {
		fontSize: 24,
		marginHorizontal: 12,
		color: Colors.primary
	},
	itemQty: {
		fontSize: 24,
		color: 'black',
		marginHorizontal: 8,
		color: Colors.primary
	},
	controls: {
		flex: 2,
		paddingBottom: 8,
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});

export default ListItem;
