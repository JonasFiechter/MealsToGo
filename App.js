import React from 'react';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurant-screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infraestructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();

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
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Restaurant'
              component={RestaurantsScreen}
              options={{title:'Restaurants'}}
            />
            <Stack.Screen
              name='Map'
              component={RestaurantsScreen}
              options={{title:'Restaurants'}}
            />
            <Stack.Screen
              name='Config'
              component={RestaurantsScreen}
              options={{title:'Restaurants'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  );
}