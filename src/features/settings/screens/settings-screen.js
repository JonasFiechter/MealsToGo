import React from "react";
import { Text } from "react-native";
import { SettingsContainer, SettingsView } from "./settings-screen-styles";
import { SafeArea } from "../../../components/utility/safe-area.component"


export const SettingsScreen = () => (
    <SafeArea>
        <SettingsContainer>
            <SettingsView>
                <Text>SettingsScreen SCREEN WORKS!</Text>
            </SettingsView>
        </SettingsContainer>
    </SafeArea>
);