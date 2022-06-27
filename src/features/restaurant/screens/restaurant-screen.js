import React from "react";
import MySearchBar from "../../../components/search_bar";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant_info_card";
import { 
  RestaurantCardView, 
  RestaurantsContainer, 
  SearchBarView 
} from "./restaurant-screen-styles.js"
import { SafeArea } from "../../../components/utility/safe-area.component"

export const RestaurantsScreen = () => (
	<SafeArea>
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
					contentContainerStyle={{paddingBottom: 1}}
				/> 
			</RestaurantCardView>
		</RestaurantsContainer>
	</SafeArea>
)