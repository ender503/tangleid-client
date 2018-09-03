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

    const claims = [];
    this.state = { claims };

    this.onProfileClicked = this.onProfileClicked.bind(this);
    this.onItemPressed = this.onItemPressed.bind(this);
    this.onCameraClicked = this.onCameraClicked.bind(this);
  }

  onProfileClicked() {
    this.props.navigation.navigate('Profile');
  }

  onItemPressed(item) {}

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
          this.state.claims.length > 0
            ?
              <FlatList
                style={{ flex: 1 }}
                data={this.state.claims}
                renderItem={({item}) => (
                  <CardItem
                    title={item.title}
                    description="Card Description"
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
    user: state.user
  }
}


export default connect(mapStateToProps)(HomeScreen);