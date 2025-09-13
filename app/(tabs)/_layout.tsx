import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function TabLayout() {

  const istrue = false;



  return (







      <Tabs
        screenOptions={{
     
          headerShown: false,
       
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <AntDesign size={28} name='shopping-cart' color={color} />,
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color }) => <AntDesign size={28} name='shopping-cart' color={color} />,
          }}
        />
        {/* <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <AntDesign size={28} name='shopping-cart' color={color} />,
          }}
        /> */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <AntDesign size={28} name='profile' color={color} />,
          }}
        />

      </Tabs>
   


  );
}
