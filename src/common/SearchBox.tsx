import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export interface SearchBoxProps {
    onChangeText: (text: String) => void
}


const SearchBox = (props: SearchBoxProps) => {
    const [text, setText] = useState('')
    const handleChangeText = (text: string) => {
        setText(text);
        props.onChangeText(text);
    };
    return (
        <View style={styles.search_box}>
            <TextInput
                value={text}
                style={{ fontSize: 16, color: 'steelblue' }}
                placeholder="Type here..."
                onChangeText={handleChangeText}
            />
        </View>
    );
}

export default SearchBox;

const styles = StyleSheet.create({
    search_box: {
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        margin: 10,
    }
});
