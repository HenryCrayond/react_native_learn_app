/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import RegisterScreen from './src/register';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.rootContainer}>
      <RegisterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#D6EFE7",
  },
})

export default App;
