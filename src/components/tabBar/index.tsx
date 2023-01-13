import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@/pages/home';
import Mine from '@/pages/mine';
import Info from '@/pages/info';
import Chart from '@/pages/chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#47ab94',
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="home-plus-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="info"
        component={Info}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon name="calendar-month-outline" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="chart"
        component={Chart}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="circle-slice-3" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="mine"
        component={Mine}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <Icon
                name="dots-horizontal-circle-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
