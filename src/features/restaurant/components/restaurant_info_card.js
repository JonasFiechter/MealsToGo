import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'

const RestaurantCard = styled(Card)`
    margin-bottom: 10px;
`;

const Title = styled.Text`
    padding: 10px; 
    align-self: center;
    color: ${(props) => props.theme.colors.ui.error};
`;

const CardCover = styled(Card.Cover)`
    padding: 20px;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'ChefRestaurant',
        icon,
        photos = [
            'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg?w=740&t=st=1653914808~exp=1653915408~hmac=d5cf1628f980ae8b36f824d6efe32cb6e4b2630be7a0b0a65f4f62fa2161d05d'
        ],
        address,
        isOpenNow = true,
        rating = 4,
        isClosed
    } = restaurant;

    return <RestaurantCard>
                <CardCover sour
                ce={{ uri: photos[0] }} />
                <Title>{name}</Title>
            </RestaurantCard>

}