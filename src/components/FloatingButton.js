import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class FloatingButton extends React.Component {
  render() {
    let combineStyles = styles;
    if (this.props.styled == 'white') {
      combineStyles.container = StyleSheet.flatten([styles.container, {
        backgroundColor: 'white'
      }]);

      combineStyles.text = StyleSheet.flatten([styles.text, {
        color: 'black'
      }]);
    }
    
    console.log(this.props.styled, styles);
    return (
      <TouchableOpacity
        style={combineStyles.container}
        onPress={this.props.onPress}>
          <Text style={combineStyles.text}>
            { this.props.text }
          </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 12,
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    borderRadius: 5,
    alignSelf: 'center',
    opacity: 0.3,
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: "200",
  }
});

export default FloatingButton;