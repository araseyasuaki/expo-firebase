import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      >
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={focused ? require('../../../assets/images/profile.png') : require('../../../assets/images/profile.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? color : 'gray' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={focused ? require('../../../assets/images/matching.png') : require('../../../assets/images/matching.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? color : 'gray' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image
              source={focused ? require('../../../assets/images/chat.png') : require('../../../assets/images/chat.png')}
              style={{
                width: size,
                height: size,
                tintColor: focused ? color : 'gray' }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
