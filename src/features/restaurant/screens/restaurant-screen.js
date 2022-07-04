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
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext)
	return (<SafeArea>
		<RestaurantsContainer>
			<SearchBarView>
				<MySearchBar
					searchHolder={'Search where you are!'}
				/>
			</SearchBarView>
			<RestaurantCardView>
				<FlatList
					data={restaurants}
					renderItem={({item}) => {
						return (
							<RestaurantInfoCard restaurant={item}/>
						)
					}}
					keyExtractor={(item) => item.name}
					contentContainerStyle={{paddingBottom: 1}}
				/> 
			</RestaurantCardView>
		</RestaurantsContainer>
	</SafeArea>)
}