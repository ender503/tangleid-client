import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

class CardItem extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ height: 100 }}>
          <Text style={styles.h2}>
            {this.props.title}
          </Text>
          <Text style={styles.p}>
            {this.props.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default CardItem;