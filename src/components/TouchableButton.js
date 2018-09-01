import React from 'react';

import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../styles';

export default class TouchableButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        style={[styles.button, this.props.style]} >

          {!this.props.inProgress && <Text style={styles.buttonLabel}>
            { this.props.text }
          </Text>}
          {this.props.inProgress && <ActivityIndicator 
            size='small'
            color='#FFFFFF'
          />}

      </TouchableOpacity>
    );
  }
}