import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyles, textStyles } = styles;
    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};


export { Button };
