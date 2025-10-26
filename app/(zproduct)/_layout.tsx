import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function ProductLayout() {




    return (

        <Stack>


            <Stack.Screen name='[id]' options={{ headerShown: false }} />
            <Stack.Screen name='category' options={{ headerShown: false, contentStyle: { backgroundColor: "white" } }} />
            <Stack.Screen name='purchase' options={{ headerShown: false, contentStyle: { backgroundColor: "#DCE3E2" } }} />
            <Stack.Screen name='payment' options={{ headerShown: false, contentStyle: { backgroundColor: "#DCE3E2" } }} />



        </Stack>

    )
}