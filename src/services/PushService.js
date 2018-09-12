import OneSignal from "react-native-onesignal";

const init = () => {
  OneSignal.init("695d987c-3c15-4631-8c0d-269ed41c15ea");
  OneSignal.inFocusDisplaying(0);
};

const addEventListener = (type, listener) => {
  if (listener) {
    OneSignal.addEventListener(type, listener);
  }
};

const removeEventListener = (type, listener) => {
  if (listener) {
    OneSignal.removeEventListener(type, listener);
  }
};

const bindHandler = handler => {
  addEventListener("received", handler.onReceived);
  addEventListener("opened", handler.onOpened);
  addEventListener("ids", handler.onIds);
};

const unbindHandler = handler => {
  removeEventListener("received", handler.onReceived);
  removeEventListener("opened", handler.onOpened);
  removeEventListener("ids", handler.onIds);
};

const configure = () => {
  OneSignal.configure();
};

export default {
  init,
  bindHandler,
  unbindHandler,
  configure
};
