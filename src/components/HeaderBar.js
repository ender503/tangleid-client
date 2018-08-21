import React from 'react';
import PropTypes from 'prop-types';

import {Text} from 'react-native';
import styles from '../styles';

class HeaderBar extends React.Component {

  render() {
    return (
      <Text style={styles.h2}>
        {this.props.text}
      </Text>
    );
  }
}

HeaderBar.propTypes = {
  text: PropTypes.string
};

export default HeaderBar;