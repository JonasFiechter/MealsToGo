import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'


const RestaurantCard = styled(Card)`
    margin-bottom: ${(props) => props.theme.space[0]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[2]}; 
    align-self: center;
    color: ${(props) => props.theme.colors.ui.error};
`;

const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[0]};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'ChefRestaurant',
        icon,
        photos = [
            'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'        ],
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