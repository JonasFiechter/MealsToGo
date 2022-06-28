import React from 'react';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurant-screen.js';
import { SettingsScreen } from './src/features/settings/screens/settings-screen.js';
import { MapScreen } from './src/features/map/screens/map-screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infraestructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-earth",
  Settings: "md-settings"
}

const screenOptions = ({ route }) => {}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
    
                if (route.name === 'Restaurants') {
                  iconName = "md-restaurant";
                } else if (route.name === 'Settings') {
                  iconName = "md-settings";
                } else if (route.name === 'Map') {
                  iconName = "md-earth";
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name='Restaurants'
              component={RestaurantsScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name='Map'
              component={MapScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name='Settings'
              component={SettingsScreen}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  );
}