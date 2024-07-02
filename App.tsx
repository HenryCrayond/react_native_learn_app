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
import ListingItems from './src/listingItems';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* <RegisterScreen /> */}
      <ListingItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#EFF3F6",
  },
})

export default App;
