import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import CardItem from '../components/CardItem';

import FloatingButton from '../components/FloatingButton';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onProfileClicked = this.onProfileClicked.bind(this);
    this.onItemPressed = this.onItemPressed.bind(this);
    this.onCameraClicked = this.onCameraClicked.bind(this);
  }

  onProfileClicked() {
    this.props.navigation.navigate('Profile');
  }

  onItemPressed(item) {
    this.props.navigation.navigate('ClaimDetail', item);
  }

  onCameraClicked() {
    this.props.navigation.navigate('Camera');
  }

  render() {
    return (
      <RootContainer>
        <TouchableOpacity
          onPress={this.onProfileClicked}>
          <HeaderBar text={ this.props.user.userName } />
        </TouchableOpacity>

        <View style={{ flex: 1}} >
        {
          this.props.claims.length > 0
            ?
              <FlatList
                style={{ flex: 1 }}
                data={this.props.claims}
                renderItem={({item, index}) => (
                  <CardItem
                    key={index.toString()}
                    title={item.claim.certification.name}
                    description={item.claim.certification.issuerName}
                    onPress={() => { this.onItemPressed(item); }}
                  />
                )}
              />
            :
              <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <Text>This is no available claims.</Text>
              </View>
        }
        </View>

        <FloatingButton
          text="Scan QR Code"
          onPress={this.onCameraClicked}
          />
      </RootContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    claims: state.claims,
  }
}


export default connect(mapStateToProps)(HomeScreen);