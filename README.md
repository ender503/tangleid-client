# TangleID client

## Prerequisites

Install the React Native CLI
```shell
$ npm install -g react-native-cli
```

Install the NPM package dependencies
```shell
$ npm install
```

If your are developing with Android, setup the `Android Studio`.

If your are developing with iOS, setup the `Xcode`.

Follow this [link](https://facebook.github.io/react-native/docs/getting-started.html) for more details.


## Running App

Run on the Android device or emulator
```shell
$ react-native run-android
```

Run on the iOS Simulator
```shell
$ react-native run-ios
```

### Run with development environment

- Create new file named `.env.development` and specify API_ENDPOINT

- Run TangleID Client

```shell
# Android
$ ENVFILE=.env.development react-native run-android           # bash
$ SET ENVFILE='.env.development' && react-native run-android  # windows
$ env:ENVFILE=".env.development"; react-native run-android    # powershell

# iOS
$ ENVFILE=.env.development react-native run-ios           # bash
$ SET ENVFILE='.env.development' && react-native run-ios  # windows
$ env:ENVFILE=".env.development"; react-native run-ios    # powershell
```