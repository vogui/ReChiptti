import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import { StatusBar } from 'react-native';
import { StackRoutes } from './src/routes/StackRoutes';
import { GlobalizeProvider } from 'react-native-globalize';
import { loadCldr } from 'react-native-globalize';
loadCldr(require('react-native-globalize/locale-data/en'));

function App() {

  return (
    <GlobalizeProvider locale="en" currency="USD">
      <PaperProvider>
        <StatusBar/>
        <StackRoutes /> 
      </PaperProvider>
    </GlobalizeProvider>
  );
}

export default App;