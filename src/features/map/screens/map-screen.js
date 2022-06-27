import React from "react";
import { Text } from "react-native";
import { MapContainer, MapView } from "./map-screen-styles";
import { SafeArea } from "../../../components/utility/safe-area.component";


export const MapScreen = () => (
    <SafeArea>
        <MapContainer>
            <MapView>
                <Text>MAP SCREEN WORKS!</Text>
            </MapView>
        </MapContainer>
    </SafeArea>
);