import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useGlobalDispatch, useGlobalState } from '../contexts';

export const GreetingPage = () => {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();

    const handleChangeName = (name: string) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name,
            },
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeName}
                value={state.name}
            />
            {state.name.length > 0 ? (
                <Text style={styles.greeting}>Hello {state.name}!</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    greeting: {
        marginTop: 24,
    },
});
