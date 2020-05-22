import React from 'react'
import { Button, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateCount } from '../actions';

export default Home = () =>
{
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={ {fontSize: 30} }>Count value is {count}</Text>
            <Button onPress={() => dispatch(updateCount())} title="Increase counter" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });