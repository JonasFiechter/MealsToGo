import React from "react";
import { Text } from "react-native";
import { MapContainer, MapView } from "./map-screen-styles";


export const MapScreen = () => (
    <MapContainer>
        <MapView>
            <Text>MAP SCREEN WORKS!</Text>
        </MapView>
    </MapContainer>
);