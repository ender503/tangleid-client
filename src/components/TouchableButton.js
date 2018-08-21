import React from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../styles';

export default class TouchableButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <View style={styles.button}>
          {!this.props.inProgress && <Text style={styles.buttonLabel}>
            { this.props.text }
          </Text>}
          {this.props.inProgress && <ActivityIndicator 
            size='small'
            color='#FFFFFF'
          />}
        </View>
      </TouchableOpacity>
    );
  }
}