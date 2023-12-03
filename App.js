import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import HomeScreen from './src/pages/bottom_tabs/HomePage'; 

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Open Drawer"
//         onPress={() => navigation.openDrawer()}
//       />
//     </View>
//   );
// }

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites Screen</Text>
    </View>
  );
}

function WatchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Watch Screen</Text>
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore Screen</Text>
    </View>
  );
}

function ExtrasScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Extras Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function HomeScreenWithDrawer({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeS"
        // component={HomeScreenWithDrawer}
        component={HomeScreen} // Use the imported HomeScreen component
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} 
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="star" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Watch" component={WatchScreen} 
      options={{
        tabBarLabel: 'Watch',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="desktop-mac" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Explore" component={ExploreScreen} 
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="compass" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Extras" component={ExtrasScreen}
      options={{
        tabBarLabel: 'Extras',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="collage" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeS">
        <Drawer.Screen name="Home" component={TabNavigator} />
        {/* <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        <Drawer.Screen name="Watch" component={WatchScreen} />
        <Drawer.Screen name="Explore" component={ExploreScreen} />
        <Drawer.Screen name="Extras" component={ExtrasScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}