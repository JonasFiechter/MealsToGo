import React from 'react';
import { RestaurantsScreen } from './src/features/restaurant/screens/restaurant_screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infraestructure/theme/index.js';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
      </ThemeProvider>
  );
}