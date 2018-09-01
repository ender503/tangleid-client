import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import FloatingButton from "../components/FloatingButton";

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onScan = this.onScan.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onBarCodeRead={this.onScan.bind(this)}
        />

        <View style={styles.widgets}>
          <FloatingButton
            text="Cancel"
            styled="white"
            onPress={this.onCancel} />
        </View>

      </View>
    );
  }

  onScan(event) {
    // TODO event.data 
    console.log('onBarCodeRead', event);
    this.props.navigation.navigate('Home', { data: event.data });
  }

  onCancel() {
    this.props.navigation.goBack();
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  widgets: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CameraScreen;