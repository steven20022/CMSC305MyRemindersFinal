import React from 'react';
import RemindersScreen from '../screens/Reminders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HighPriorityScreen from '../screens/HighPriorityReminders';
import LowPriorityScreen from '../screens/LowPriorityReminders';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'All'} component={RemindersScreen}/>
        <Tab.Screen name={'High'} component={HighPriorityScreen}/>
        <Tab.Screen name={'Low'} component={LowPriorityScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;