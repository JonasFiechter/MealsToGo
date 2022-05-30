import React from "react";

import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import MySearchBar from "../../../components/search_bar";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MySearchBar
        />
      </View>
      <View style={styles.body}>
        <Text>BODY</Text>
      </View>
      <View style={styles.menu}>
        <Text>MENU</Text>
      </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
    },
    header: {
      height: 60,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
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
  