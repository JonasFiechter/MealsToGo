import React from "react";
import { Platform, StatusBar } from 'react-native';
import MySearchBar from "../../../components/search_bar";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import styled from "styled-components/native"

const RestaurantsContainer = styled.SafeAreaView`
    flex: 1px;
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
    paddingTop: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const SearchBarView = styled.View`
    height: ${(props) => props.theme.sizes[3]};
    padding: ${(props) => props.theme.space[2]};
    alignItems: center;
    justifyContent: center;
`;

const RestaurantCardView = styled.View`
    padding: ${(props) => props.theme.space[2]};
    flex: 1;
    flexGrow: 1;
`;

export const RestaurantsScreen = () => (
    <RestaurantsContainer>
      <SearchBarView>
        <MySearchBar
            searchHolder={'Search where you are!'}
        />
      </SearchBarView>
      <RestaurantCardView>
        <RestaurantInfoCard/>
      </RestaurantCardView>
    </RestaurantsContainer>
)