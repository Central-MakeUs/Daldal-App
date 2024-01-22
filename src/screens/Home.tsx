import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const Home = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://192.168.0.83:5173'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
