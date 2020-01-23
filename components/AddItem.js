import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';

/**
 * AddItem component provides the user with inputs to add new items
 * to the 'items' collection.
 *
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */

class AddItem extends Component {
	constructor(props) {
		super(props);

		this.state = { itemName: '', itemQty: '' };
	}

	addItemHandler = () => {
		this.props.addItem(this.state.itemName, this.state.itemQty);
		this.setState({ itemName: '', itemQty: '' });
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textInput}>
					<View style={styles.itemName}>
						<Input
							type="text"
							value={this.state.itemName}
							keyboardType="default"
							onChangeText={itemName => this.setState({ itemName })}
							placeholder="Item's name"
						/>
					</View>
					<View style={styles.itemQty}>
						<Input
							type="number"
							value={this.state.itemQty}
							keyboardType="number-pad"
							onChangeText={itemQty => this.setState({ itemQty: itemQty })}
							placeholder="Qty"
						/>
					</View>
				</View>
				<View style={styles.addButton}>
					<Button
						style={styles.button}
						title="Add"
						type="clear"
						titleProps={{ style: { color: Colors.primary, fontSize: 18 } }}
						onPress={this.addItemHandler}
						icon={
							<Icon
								style={styles.buttonIcon}
								name="cart-plus"
								size={20}
								color={Colors.primary}
							/>
						}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 3,
		elevation: 5,
		borderRadius: 5,
		backgroundColor: 'white',
		margin: 10,
		padding: 5
	},
	textInput: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	itemName: {
		flex: 3
	},
	itemQty: {
		flex: 1
	},
	addButton: {
		flex: 2
	},
	buttonIcon: {
		paddingRight: 16
	}
});

export default AddItem;
