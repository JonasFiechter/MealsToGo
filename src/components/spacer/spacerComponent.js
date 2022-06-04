import react from "react";
import { View } from 'react-native';
import styled from 'styled-components/native'

const TopSmall = styled.View`
    marginTop: ${(props)=> props.theme.space[1]};
`;

const TopMedium = styled.View`
    marginTop: ${(props) => props.theme.space[2]};
`;

const TopLarge = styled.View`
    marginTop: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
    marginLeft: ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled.View`
    marginLeft: ${(props) => props.theme.space[2]};
`;

const LeftLarge = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
`;


export const Spacer = ({variant}) => {
    if(variant === 'top.large') {
        return <TopLarge/>
    } if (variant === 'left.large') {
        return <LeftLarge/>
    } else {
        return <View/>
    }
};