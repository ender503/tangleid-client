import React from 'react';
import { connect } from 'react-redux';

import { View, Text, TextInput } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import TouchableButton from '../components/TouchableButton';

import styles from '../styles';

import { createIdentity } from '../actions';

class CreateIdentityScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
    };

    this.onNextClick = this.onNextClick.bind(this);
  }

  onNextClick() {
    this.props.createIdentity({
      userName: this.state.userName
    });

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <RootContainer>
        <HeaderBar text='Enter your Information' />
        
        <View style={{ flex: 1}}>

          <Text style={ styles.p }>
            Your information is private and only stored on your device.
          </Text>

          <Text>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(userName) => this.setState({userName})}
            placeholder="Enter your name"
            value={this.state.text}
          />
        </View>

        <TouchableButton
          text="Next"
          onClick={this.onNextClick}
          />

      </RootContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createIdentity: (userProfile) => dispatch(createIdentity(userProfile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateIdentityScreen);