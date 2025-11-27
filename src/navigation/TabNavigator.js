import Icon from '@react-native-vector-icons/material-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#3498db',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false, // Hide header since StackNavigator has its own
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
