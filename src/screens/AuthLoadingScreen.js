import React from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.navigation.navigate(this.props.isLogin ? 'Home' : 'Welcome');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isLogin: state.user != null ,
    user: state.user,
  }
}

export default connect(mapStateToProps)(AuthLoadingScreen);