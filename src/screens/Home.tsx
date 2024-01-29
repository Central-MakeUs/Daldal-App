import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {Alert, BackHandler} from 'react-native';
import {useEffect, useRef, useState} from 'react';

type navStateType = {
  url: string;
  canGoBack: boolean;
};

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

const Home = () => {
  const webViewRef = useRef<WebView>(null);
  const [navState, setNavState] = useState<navStateType>({
    url: '',
    canGoBack: false,
  });

  useEffect(() => {
    const handleBackButton = () => {
      if (navState.canGoBack) {
        //TODO 실배포 주소로 변경
        if (navState.url === 'http://localhost:5173/') {
          close();
        } else {
          webViewRef.current?.goBack();
        }
      } else {
        close();
      }
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navState.canGoBack]);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'http://localhost:5173'}}
        ref={webViewRef}
        onNavigationStateChange={state => {
          setNavState({url: state.url, canGoBack: state.canGoBack});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
