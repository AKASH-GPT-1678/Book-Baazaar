import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductLayout() {




    return (

        <Stack>
            <Text>Hii</Text>
       
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen name='purchase' options={{headerShown : false, contentStyle : {backgroundColor : "#DCE3E2"}}} />
                <Stack.Screen name='payment' options={{headerShown : false, contentStyle : {backgroundColor : "#DCE3E2"}}} />

       

        </Stack>

    )
}