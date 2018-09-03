import React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import FloatingButton from '../components/FloatingButton';

import tangleIDUtils from '../utils/tangleIDUtils';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onDIDClicked = this.onDIDClicked.bind(this);
  }

  onCancel() {
    this.props.navigation.goBack();
  }

  onDIDClicked() {
    const link = tangleIDUtils.getLinkFromDID(this.props.user.did);
    Linking.openURL(link);
  }

  render() {
    return (
      <RootContainer>
        <HeaderBar text={this.props.user.userName} />
        <ScrollView style={styles.container}>

          <TouchableOpacity
            onPress={this.onDIDClicked}>
            <Text style={styles.header}>TangleID DID</Text>
            <Text style={styles.content}>{this.props.user.did}</Text>
          </TouchableOpacity>

          <Text style={styles.header}>Seed</Text>
          <Text style={styles.content}>{this.props.user.seed}</Text>

          <Text style={styles.header}>Public Key</Text>
          <Text style={styles.content}>{this.props.user.keypair.publicKey}</Text>

          <Text style={styles.header}>Private Key</Text>
          <Text style={styles.content}>{this.props.user.keypair.privateKey}</Text>

        </ScrollView>

        <FloatingButton
            text='Cancel'
            onPress={this.onCancel}
            />
      </RootContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  header: {
    marginTop: 18,
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 28,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);