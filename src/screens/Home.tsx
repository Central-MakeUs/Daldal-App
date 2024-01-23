import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const Home = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://localhost:5173'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
