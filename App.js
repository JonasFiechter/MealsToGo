import React from 'react';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurant_screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infraestructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

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
        <RestaurantsScreen/>
      </ThemeProvider>
  );
}