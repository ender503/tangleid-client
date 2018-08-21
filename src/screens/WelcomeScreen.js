import React, {Component} from 'react';
import { View } from 'react-native';

import RootContainer from '../components/RootContainer';
import HeaderBar from '../components/HeaderBar';
import TouchableButton from '../components/TouchableButton';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.onNextClick = this.onNextClick.bind(this);
  }

  onNextClick() {}

  render() {
    return (
      <RootContainer>
        <HeaderBar text="TangleID Demo App"/>

        <View style={{ flex: 1 }}></View>

        <TouchableButton
          text="Create Identity"
          onClick={this.onNextClick}
          />
      </RootContainer>
    );
  }
};


