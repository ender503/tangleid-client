import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import CardItem from '../components/CardItem';

import FloatingButton from '../components/FloatingButton';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    const claims = [];
    for(var i = 0; i < 100; i++) {
      claims.push({
        id: i,
        title: 'Smart card' + i
      });
    }
    this.state = { claims };

    this.onItemPressed = this.onItemPressed.bind(this);
    this.onCameraClicked = this.onCameraClicked.bind(this);
  }

  onItemPressed(item) {}

  onCameraClicked() {
    this.props.navigation.navigate('Camera');
  }

  render() {
    return (
      <RootContainer>
        <HeaderBar text={ this.props.user.userName } />

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
              <Text>This is no available claims.</Text>
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