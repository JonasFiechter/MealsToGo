import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'


const Title = styled.Text`
    padding: 15px;
    align-self: center;
`;


export const RestaurantInfoCard = ({restaurant = {}}) => {

    const {
        name='ChefRestaurant', 
        icon,
        photos = [
            'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg?w=740&t=st=1653914808~exp=1653915408~hmac=d5cf1628f980ae8b36f824d6efe32cb6e4b2630be7a0b0a65f4f62fa2161d05d'
        ],
        address,
        isOpenNow = true,
        rating = 4,
        isClosed
    } = restaurant;

    return <Card style={styles.card}>
                <Card.Cover style={styles.photo} source={{ uri: photos[0] }}/>
                <Title>{name}</Title>
            </Card>

}
    
const styles = StyleSheet.create ({
    card: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
    }, 
    photo: {
        backgroundColor: '#fff'
    },
})