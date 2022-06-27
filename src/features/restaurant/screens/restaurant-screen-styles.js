import styled from "styled-components/native";


export const RestaurantsContainer = styled.View`
    flex: 1;
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const SearchBarView = styled.View`
    height: ${(props) => props.theme.sizes[3]};
    padding: ${(props) => props.theme.space[2]};
    alignItems: center;
    justifyContent: center;
`;

export const RestaurantCardView = styled.View`
    padding: ${(props) => props.theme.space[2]};
    flex: 1;
    flexGrow: 1;
`;
