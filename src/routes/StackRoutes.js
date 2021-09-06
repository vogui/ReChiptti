import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackPosting } from './StackPosting';
import { WebScreen } from '../screens/WebScreen';
import { StackHeader } from '../components/StackHeader';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="ReChiptti" 
          component={StackPosting} 
          options={
            {
              headerTitle: props => <StackHeader {...props} />
            }
          } 
        />
        <Stack.Screen name="Online" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
