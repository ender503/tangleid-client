import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

class RootContainer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    );
  }
}

export default RootContainer;