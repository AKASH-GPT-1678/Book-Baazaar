import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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
        name="bundles"
        options={{
          title: 'Bundles',
          tabBarIcon: ({ color }) => <Entypo size={28} name='book' color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        
        options={{
          
          title: 'Orders',
          tabBarIcon: ({ color }) => <AntDesign size={28} name='shopping-cart' color={color} />,
          
        }}
      />


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
