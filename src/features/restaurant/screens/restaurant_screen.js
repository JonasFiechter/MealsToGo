import React from "react";

import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import MySearchBar from "../../../components/search_bar";
import { RestaurantInfoCard } from "../components/restaurant_info_card";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MySearchBar
            searchHolder={'Search here!'}
        />
      </View>
      <View style={styles.body}>
        <RestaurantInfoCard/>
        <RestaurantInfoCard/>
        <RestaurantInfoCard/>
      </View>
      <View style={styles.menu}>
        <Text>MENU</Text>
      </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
    },
    header: {
        height: 60,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        padding: 10,
        flex: 1,
        flexGrow: 1,
    },
    menu: {
        flex: 1,
        flexGrow: 0.1,
        backgroundColor: '#148',
    },
  });
  