import React, { useContext } from "react";
import MySearchBar from "../../../components/search_bar";
import { FlatList, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import { 
  RestaurantCardView, 
  RestaurantsContainer, 
  SearchBarView 
} from "./restaurant-screen-styles.js"
import { SafeArea } from "../../../components/utility/safe-area.component"
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/textComponent";

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext)
	console.log(isLoading)
	return (
	<SafeArea>
		{isLoading && (
			<View style={{ position: 'absolute', top: '50%', left: '50%'}}>
				<ActivityIndicator 
					size={50}
					style={{ marginLeft: -25 }}
					animating={true}
					color={Colors.blue300}
				/>
			</View>
		)}
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