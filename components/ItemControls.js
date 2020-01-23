import React from 'react';
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';

const ItemControls = props => {
	return (
		<View style={styles.container}>
			<Button
				style={styles.button}
				type="clear"
				icon={<Icon name="minus" size={20} color={Colors.primary} />}
				onPress={() => props.decrement(props.id, props.qty)}
			/>
			<Button
				style={styles.button}
				type="clear"
				icon={<Icon name="plus" size={20} color={Colors.primary} />}
				onPress={() => props.increment(props.id, props.qty)}
			/>
			<Button
				style={styles.button}
				type="clear"
				icon={<Icon name="trash" size={20} color={Colors.primary} />}
				onPress={() => props.delete(props.id)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		justifyContent: 'center'
	}
});

export default ItemControls;
