import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AddItem from './AddItem';
import ListItem from './ListItem';

import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import { Items } from '../api/items';

class GroceryList extends Component {
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

	addItemHandler = (itemName, itemQty) => {
		itemQty = itemQty * 1;
		Items.insert({ itemName, itemQty, createdAt: new Date() });
	};

	deleteItemHandler = _id => {
		Items.remove(_id);
	};

	incrementQtyHandler = (_id, qty) => {
		qty = qty * 1;
		Items.update(_id, {
			$set: { itemQty: qty + 1 }
		});
	};

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
