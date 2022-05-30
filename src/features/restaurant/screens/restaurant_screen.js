import React from "react";

import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import MySearchBar from "../../../components/search_bar";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import styled from "styled-components/native"

const RestaurantsContainer = styled.SafeAreaView`
    flex: 1px;
    backgroundColor: white;
    paddingTop: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const SearchBarView = styled.View`
    height: 60px;
    padding: 10px;
    alignItems: center;
    justifyContent: center;
`;

const RestaurantCardView = styled.View`
    padding: 10px;
    flex: 1;
    flexGrow: 1;
`;

export const RestaurantsScreen = () => (
    <RestaurantsContainer>
      <SearchBarView>
        <MySearchBar
            searchHolder={'Search here!'}
        />
      </SearchBarView>
      <RestaurantCardView>
        <RestaurantInfoCard/>
      </RestaurantCardView>
    </RestaurantsContainer>
)