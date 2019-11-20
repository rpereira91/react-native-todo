import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ActItem = props => {
    return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem}>
            <Text>{props.activity}</Text>
        </View>
    </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      margin: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }

});
export default ActItem;