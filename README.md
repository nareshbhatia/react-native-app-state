# React Native App State

Sample app to show that global state is kept intact even when app is inactive or
in background.

## Build Instructions

### Run the app in the simulator

```bash
yarn
cd ios
pod install
cd ..
yarn ios
```

-   Type your name in the TextEdit to change global state.
-   Now change app state by going to the home screen or switching to another app
    or locking your phone.
-   Come back to this app, thus making it active. Your name should still show
    up, proving that the global state is intact.
