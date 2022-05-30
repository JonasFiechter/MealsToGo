import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>HEADER</Text>
      </View>
      <View style={styles.body}>
        <Text>BODY</Text>
      </View>
      <View style={styles.menu}>
        <Text>MENU</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
  },
  header: {
    flex: 1,
    flexGrow: 0.1,
    backgroundColor: '#948',
  },
  body: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#448',
  },
  menu: {
    flex: 1,
    flexGrow: 0.1,
    backgroundColor: '#148',
  },
});
