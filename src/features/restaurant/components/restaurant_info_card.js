import React from 'react';
import { Card, Text } from 'react-native-paper';
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer/spacerComponent';
import { View } from 'react-native';

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

const ClosedTempText = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.ui.secondary};
`;

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
                    <Title>{name}</Title>
                        <RatingView>
                            <Rating>
                                {ratingArray.map(() =>
                                        <View>
                                            <SvgXml xml={star} width={20} height={20}/>
                                            <Spacer variant={'left.large'}/>
                                        </View>
                                )
                            }
                            </Rating>
                            {isTemporarlyClosed ? <ClosedTempText>Temporarly closed</ClosedTempText> : null}
                            {isOpenNow ? <SvgXml xml={open} width={20} height={20}/> : null}
                        </RatingView>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>

};