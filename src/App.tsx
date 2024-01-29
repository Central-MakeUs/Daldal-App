import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from '@navigators/Navigation';
import {Alert, BackHandler} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const close = () => {
  Alert.alert('정말 종료하시겠어요?', '앱을 종료하려면 확인을 눌러주세요.', [
    {
      text: '취소',
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: '확인',
      onPress: () => BackHandler.exitApp(),
    },
  ]);
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272A31',
  },
});

export default App;
