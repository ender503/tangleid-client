import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import TouchableButton from '../components/TouchableButton';
import FieldRow from '../components/FieldRow';

import tangleIDUtils from "../utils/tangleIDUtils";

class ChallengeScreen extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;
    this.state = {
      challenge: {
        callback: params.challenge.callback
      },
      requested: [
        "name",
      ]
    };

    this.onContinue = this.onContinue.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onContinue() {
    const callback = this.state.challenge.callback;
    tangleIDUtils.sendResponse({
      user: this.props.user,
      pushToken: "",
      callback,
    }).then(() => {
      this.props.navigation.popToTop();
    }).catch((error) => {
      console.log(error);
      alert('Please try again later.');
    });
  }

  onCancel() {
    this.props.navigation.popToTop();
  }

  render() {
    return (
      <RootContainer>
        <HeaderBar text='Login Request'/>

        <Text style={styles.title}>
          TangleID Demo
        </Text>

        <View style={{ flex: 1 }}>

          <Text style={styles.description}>
            is requesting this information
          </Text>

          <FieldRow
            title='name'
            description={this.props.user.userName}
          />

          <FieldRow
            title='Push notification'
            description='Allow'
          />

        </View>


        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}>

          <TouchableButton
            text="Cancel"
            style={{flex: 1, marginHorizontal: 10 }}
            onClick={this.onCancel}
            />

          <TouchableButton
            text="Continue"
            style={{flex: 1, marginHorizontal: 10 }}
            onClick={this.onContinue}
            />

        </View>
      </RootContainer>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 22,
  },
  description: {
    marginVertical: 10,
    marginBottom: 40,
    color: '#888',
    fontSize: 18,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(ChallengeScreen);