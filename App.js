import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//https://jingyan.baidu.com/album/e5c39bf5d949c139d760333d.html?picindex=9
//https://blog.csdn.net/sinat_17775997/article/details/63252922
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
