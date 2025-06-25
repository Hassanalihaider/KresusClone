/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
<<<<<<< HEAD
<<<<<<< HEAD
import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';
=======
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
>>>>>>> 546739b9b525d4fbe79277ad3755ceae279db8bb
=======
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
>>>>>>> 546739b9b525d4fbe79277ad3755ceae279db8bb

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      <Text>
        hey Github
      </Text>
=======
      <NewAppScreen templateFileName="App.tsx" />
>>>>>>> 546739b9b525d4fbe79277ad3755ceae279db8bb
=======
      <NewAppScreen templateFileName="App.tsx" />
>>>>>>> 546739b9b525d4fbe79277ad3755ceae279db8bb
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
