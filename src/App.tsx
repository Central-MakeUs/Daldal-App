import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from '@navigators/Navigation';

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
