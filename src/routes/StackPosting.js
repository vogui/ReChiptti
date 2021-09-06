import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PostingScreen } from '../screens/PostingScreen';
import { SCREENS } from '../utils/constants';
import { TopTabLabel } from '../components/TopTabLabel';
import { TopTabIcon } from '../components/TopTabIcon';
import { COLORS} from '../styles/globalStyles'
import { StyleSheet } from 'react-native';

const TopTab = createMaterialTopTabNavigator();


const styles = StyleSheet.create({
    indicatorStyle:{
      color:COLORS.orange, 
      backgroundColor:COLORS.orange
    },
    labelStyle:{ 
      margin:0, 
      padding:0
    },
    iconStyle:{
      margin:0, 
      padding:0, 
      height:12, 
      justifyContent:"center", 
      display:"flex", 
      flexDirection:"row"
    },
    tabStyle:{
      margin:5,  
      justifyContent:"center"
    }
  })

export function StackPosting() {
  
  return (
        <TopTab.Navigator 
          tabBarOptions={{
          activeTintColor: COLORS.orange,
          inactiveTintColor: COLORS.gray,
          indicatorStyle:styles.indicatorStyle,
          showIcon: true,
          labelStyle:styles.labelStyle,
          iconStyle:styles.iconStyle,
          tabStyle:styles.tabStyle
        }}
        >
          {
            SCREENS.map(({name,title},index)=>
            <TopTab.Screen 
              key={index}
              name={name} 
              options={
                {
                  tabBarLabel:(props)=><TopTabLabel {...props} title={title?title:name}/>, 
                  tabBarIcon:(props)=><TopTabIcon {...props} name={name}/>
                }
              } 
              component={PostingScreen}  
            />
            )
          }
        </TopTab.Navigator>
  );
}