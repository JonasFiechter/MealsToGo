import React from "react";
import MySearchBar from "../../../components/search_bar";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import { 
  RestaurantCardView, 
  RestaurantsContainer, 
  SearchBarView 
} from "./restaurant-screen-styles.js"


export const RestaurantsScreen = () => (
    <RestaurantsContainer>
		<SearchBarView>
			<MySearchBar
				searchHolder={'Search where you are!'}
			/>
		</SearchBarView>
		<RestaurantCardView>
			<FlatList
			data={[{name: 1}, {name: 2}, {name: 3}]}
			renderItem={() => <RestaurantInfoCard/>}
			keyExtractor={(item) => item.name}
			contentContainerStyle={{padding: 6}}
			/> 
		</RestaurantCardView>
		</RestaurantsContainer>
)