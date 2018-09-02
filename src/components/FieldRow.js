import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

 class FieldRow extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: '#aaa',
    paddingLeft: 20,
    borderTopWidth: 1,
  },
  title: {
    flex: 1,
    color: '#aaa',
    fontSize: 18,
  },
  description: {
    flex: 2,
    color: '#333',
    fontSize: 18,
  },
});

export default FieldRow;