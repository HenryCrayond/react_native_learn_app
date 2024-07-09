import React from 'react';
import Auth from './src/auth';
import { NavigationContainer } from '@react-navigation/native';

// import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

export default App;
