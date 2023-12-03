import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TodayScreen from '../top_tabs/Today'; 
import TodayMinusTwo from '../top_tabs/TodayMinusTwo'; 

const Tab = createMaterialTopTabNavigator();

const CustomComponent = ({ date }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{date}</Text>
  </View>
);

export default function HomeScreen() {
  const getDate = (offset) => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date;
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  };

  const renderComponent = (offset) => (
    <CustomComponent date={formatDate(getDate(offset))} />
  );

  return (
    <Tab.Navigator
      initialLayout={{ width: 0, height: 0 }}
      initialRouteName="Today"
    >
      <Tab.Screen
        name={formatDate(getDate(-2))}
        component={TodayMinusTwo}
      />
      <Tab.Screen
        name={formatDate(getDate(-1))}
        component={() => renderComponent(-1)}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
      />
      <Tab.Screen
        name={formatDate(getDate(1))}
        component={() => renderComponent(1)}
      />
      <Tab.Screen
        name={formatDate(getDate(2))}
        component={() => renderComponent(2)}
      />
    </Tab.Navigator>
  );
}
