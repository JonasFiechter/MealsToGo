import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacerComponent';
import { Text } from '../../../components/typography/textComponent';
import { View } from 'react-native';
import { 
    CardCover, Address, Info, Rating, RatingView, RestaurantCard 
} from './restaurant-info-card-styles';


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'ChefRestaurant',
        icon,
        photos = ['https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg'],
        address = 'Hannibal st. 399 - Brooklin',
        isOpenNow = true,
        rating = 5,
        isTemporarlyClosed = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return <RestaurantCard>
                <CardCover source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="title">{name}</Text>
                        <RatingView>
                            <Rating>
                                {ratingArray.map(() =>
                                        <View>
                                            <SvgXml xml={star} width={20} height={20}/>
                                        </View>
                                )
                            }
                            </Rating>
                            {isTemporarlyClosed ? 
                                            <Text variant="error">Temporarly closed</Text> : null}
                            {isOpenNow ? <SvgXml xml={open} width={20} height={20}/> : null}
                        </RatingView>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>

};