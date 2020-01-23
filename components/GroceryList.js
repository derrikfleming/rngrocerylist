import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import { LOCAL_HOSTS_IP } from 'react-native-dotenv';

Meteor.connect(`ws://${LOCAL_HOSTS_IP}:3000/websocket`);

import { Items } from '../api/items';

import AddItem from './AddItem';
import ListItem from './ListItem';

/**
 * GroceryList is the container for the rest of the application, where all of the action
 * happens with (react-native-)Meteor. Create, Read, Update, and Delete functions are
 * implemented in this component.
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */

class GroceryList extends Component {
	// the item component to be rendered in <MeteorListView />
	item = item => (
		<ListItem
			itemId={item._id}
			itemName={item.itemName}
			itemQty={item.itemQty}
			decrementItem={this.decrementQtyHandler}
			incrementItem={this.incrementQtyHandler}
			deleteItem={this.deleteItemHandler}
		/>
	);

	/**
	 * Function provides 'Create' feature for the 'items' collection
	 * Reference is passed as a prop to the AddItem component  ('./AddItem.js')
	 * which contains the TextInputs for both of the params.
	 *
	 * @param {string} itemName - the to-be-added item's name
	 * @param {integer} itemQty - the to-be-added item's quantity
	 */
	addItemHandler = (itemName, itemQty) => {
		itemQty = itemQty * 1;
		Items.insert({ itemName, itemQty, createdAt: new Date() });
	};

	/**
	 * Function provides 'Delete' feature for the 'items' collection
	 * Reference is passes as a prop through the ListItem component
	 * ('./ListItem.js') and then on to the ItemControls ('./ItemControls.js')
	 *
	 * @param {string} _id - the to-be-deleted item's id
	 */
	deleteItemHandler = _id => {
		Items.remove(_id);
	};

	/**
	 * Function provides an 'Update' feature for an item in the
	 * 'items' collection. By incrementing the 'itemQty' property of an item
	 * Reference is passes as a prop through the ListItem component
	 * ('./ListItem.js') and then on to the ItemControls ('./ItemControls.js')
	 *
	 * @param {string} _id - the item's id
	 * @param {integer} _qty - the item's quantity, prior to incrementing
	 */
	incrementQtyHandler = (_id, qty) => {
		qty = qty * 1;
		Items.update(_id, {
			$set: { itemQty: qty + 1 }
		});
	};

	/**
	 * Function provides an 'Update' feature for an item in the
	 * 'items' collection. By incrementing the 'itemQty' property of an item
	 * Reference is passes as a prop through the ListItem component
	 * ('./ListItem.js') and then on to the ItemControls ('./ItemControls.js')
	 *
	 * @param {string} _id - the item's id
	 * @param {integer} _qty - the item's quantity, prior to decrementing
	 */
	decrementQtyHandler = (_id, qty) => {
		qty = qty * 1;
		if (qty > 1) {
			Items.update(_id, {
				$set: { itemQty: qty - 1 }
			});
		} else {
			Items.remove(_id);
		}
	};

	render() {
		// the items in the 'items' collection
		const { items } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.addItem}>
					<AddItem addItem={this.addItemHandler} />
				</View>
				<View style={styles.groceryList}>
					<MeteorListView
						enableEmptySections
						collection="items"
						renderRow={this.item}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 48,
		paddingLeft: 16,
		paddingRight: 16
	},
	addItem: {
		flex: 1,
		padding: 8,
		width: '100%'
	},
	groceryList: {
		flex: 5,
		width: '100%'
	}
});

export default withTracker(params => {
	return {
		items: Items.find({})
	};
})(GroceryList);
