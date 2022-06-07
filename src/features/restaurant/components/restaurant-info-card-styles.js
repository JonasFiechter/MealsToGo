import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


export const CardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[0]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.button};
    padding: ${(props) => props.theme.space[0]}; 
    color: ${(props) => props.theme.colors.text.secondary};
`;

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    padding: ${(props) => props.theme.space[0]}; 
    color: ${(props) => props.theme.colors.text.primary};
`;

export const RatingView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Rating = styled.View`
    padding-top: ${(props) => props.theme.space[1]};
    flex-direction: row;
`;