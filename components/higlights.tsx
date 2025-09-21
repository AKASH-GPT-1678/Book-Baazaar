import React from "react";
import { View, Text, ScrollView } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const highlights = [
    { icon: <MaterialCommunityIcons name="billboard" size={24} color="black" />, description: "37.084 mm Display" },
    { icon: <MaterialCommunityIcons name="billboard" size={24} color="black" />, description: "With Touchscreen" },
    { icon: <MaterialCommunityIcons name="bluetooth" size={24} color="black" />, description: "With Bluetooth" },
    { icon: <MaterialCommunityIcons name="heart-pulse" size={24} color="black" />, description: "With Heart Rate Monitor" },
    { icon: <MaterialCommunityIcons name="phone" size={24} color="black" />, description: "With Call Function" },
    { icon: <MaterialCommunityIcons name="run" size={24} color="black" />, description: "Ideal for Fitness & Outdoor" },
    { icon: <MaterialCommunityIcons name="battery-charging" size={24} color="black" />, description: "Up to 7 days of Battery Run Time" },
];


export default function ProductHighlights() {
    return (
        <ScrollView className="p-4 bg-white">
            <Text className="text-lg font-bold mb-4">Product highlights</Text>
            {highlights.map((text, index) => (
                <View
                    key={index}
                    className="flex-row items-center gap-3 mb-3"
                >
                    <View className="bg-white p-2 rounded-lg opacity-70">
                        {text.icon}
                    </View>
                    <Text className="text-base text-gray-800">{text.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
