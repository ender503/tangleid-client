import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/utils/configureStore';
const { store } = configureStore();



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>TangleID Rocks!</Text>
        </View>
      </Provider>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});