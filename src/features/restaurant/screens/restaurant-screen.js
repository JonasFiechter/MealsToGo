import React, { useContext } from "react";
import MySearchBar from "../../../components/search_bar";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import { 
  RestaurantCardView, 
  RestaurantsContainer, 
  SearchBarView 
} from "./restaurant-screen-styles.js"
import { SafeArea } from "../../../components/utility/safe-area.component"
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";

export const RestaurantsScreen = () => {
	const restaurantContext = useContext(RestaurantsContext)
	console.log(restaurantContext)
	return (<SafeArea>
		<RestaurantsContainer>
			<SearchBarView>
				<MySearchBar
					searchHolder={'Search where you are!'}
				/>
			</SearchBarView>
			<RestaurantCardView>
				<FlatList
					data={restaurantContext.restaurants}
					renderItem={() => <RestaurantInfoCard/>}
					keyExtractor={(item) => item.name}
					contentContainerStyle={{paddingBottom: 1}}
				/> 
			</RestaurantCardView>
		</RestaurantsContainer>
	</SafeArea>)
}