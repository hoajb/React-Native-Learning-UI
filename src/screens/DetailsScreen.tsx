import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DetailsProps } from '../navigation/Navigator';

const DetailsScreen = ({ navigation }: DetailsProps) => {
    const handlePress = () => {

        Alert.alert(
            'Title of the Alert',
            'Message of the Alert',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        console.log('Cancel Pressed')
                        navigation.navigate('HomeScreen',{title:'HOME BAkkk'})
                    },
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        console.log('OK Pressed')
                        navigation.push('DetailsScreen', { itemId: 442, itemName: 'Nana' });
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text>Hello from Details</Text>

            <Button title="Go My Home Screen1" onPress={handlePress} />
        </View>
    )
}

export default DetailsScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
    text: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: "bold",
        textAlign: "center",
    },

});
