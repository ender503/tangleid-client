import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import RootContainer from "../components/RootContainer";
import HeaderBar from "../components/HeaderBar";
import TouchableButton from "../components/TouchableButton";

import { addClaim } from "../actions";

class ConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onConfirm() {
    const additionalData = this.props.navigation.state.params;
    this.props.addClaim(additionalData);
    this.props.navigation.popToTop();
  }

  onCancel() {
    this.props.navigation.popToTop();
  }

  render() {
    const additionalData = this.props.navigation.state.params;
    return (
      <RootContainer>
        <HeaderBar text="Login Request" />

        <Text style={styles.title}>TangleID Demo</Text>

        <View style={{ flex: 1 }}>
          <Text style={styles.description}>is requesting this information</Text>

          <ScrollView>
            <Text style={styles.content}>
              {JSON.stringify(additionalData, null, 2)}
            </Text>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableButton
            text="Cancel"
            style={{ flex: 1, marginHorizontal: 10 }}
            onClick={this.onCancel}
          />

          <TouchableButton
            text="Continue"
            style={{ flex: 1, marginHorizontal: 10 }}
            onClick={this.onConfirm}
          />
        </View>
      </RootContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 22
  },
  description: {
    marginVertical: 10,
    marginBottom: 40,
    color: "#888",
    fontSize: 18,
    textAlign: "center"
  },
  content: {
    marginVertical: 10,
    marginBottom: 40,
    color: "#888",
    fontSize: 18
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addClaim: claim => dispatch(addClaim(claim))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ConfirmationScreen);
