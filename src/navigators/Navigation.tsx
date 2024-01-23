import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '@navigators/StackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
