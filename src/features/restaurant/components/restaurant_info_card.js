import React from 'react';
import { Card, Text } from 'react-native-paper';
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'

const RestaurantCard = styled(Card)`
    margin-bottom: ${(props) => props.theme.space[0]};
`;


const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.button};
    padding: ${(props) => props.theme.space[0]}; 
    color: ${(props) => props.theme.colors.text.secondary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    padding: ${(props) => props.theme.space[0]}; 
    color: ${(props) => props.theme.colors.text.primary};
`;

const RatingView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Rating = styled.View`
    padding-top: ${(props) => props.theme.space[1]};    
    flex-direction: row;
`;

const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[0]};
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'ChefRestaurant',
        icon,
        photos = ['https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg'],
        address = 'Hannibal st. 399 - Brooklin',
        isOpenNow = true,
        rating = 4,
        isTemporarlyClosed = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return <RestaurantCard>
                <CardCover sour
                ce={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                        <RatingView>
                            <Rating>
                                {ratingArray.map(() => 
                                    <SvgXml xml={star} width={20} height={20}/>
                                )
                            }
                            </Rating>
                            {isOpenNow ? <SvgXml xml={open} width={20} height={20}/> : null}
                            {isTemporarlyClosed ? <Text>Temporarly closed</Text> : null}
                        </RatingView>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>

};