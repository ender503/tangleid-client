import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import RootContainer from "../components/RootContainer";
import HeaderBar from "../components/HeaderBar";
import FloatingButton from "../components/FloatingButton";

class ClaimDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <RootContainer>
        <HeaderBar text="Claim Detail" />
        <ScrollView style={styles.container}>
          <Text style={styles.content}>
            {JSON.stringify(this.props.navigation.state.params, null, 2)}
          </Text>
        </ScrollView>

        <FloatingButton text="Cancel" onPress={this.onCancel} />
      </RootContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  },
  content: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 28
  }
});

export default ClaimDetailScreen;
