import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Ratings from "./ratings";

interface Props {
    item: any;
    onPress: () => void;
    onAdd: () => void;
}

export const ProductCard = ({ item, onPress, onAdd }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View className="w-[130px] p-1 mb-5">
                <View className="bg-white rounded-xl shadow-sm p-2 relative h-[220px]">
                    <Image
                        source={{ uri: item.imageUrl }}
                        className="h-[100px] w-full rounded-lg"
                        resizeMode="cover"
                    />

                    <Pressable
                        className="absolute top-[85px] right-2 bg-white border border-green-600 rounded px-2 py-0.5"
                        onPress={onAdd}
                    >
                        <Text className="text-[10px] font-bold text-green-600">ADD</Text>
                    </Pressable>

                    <View className="mt-2">
                        <Text className="text-[10px] text-gray-500">{item.author}</Text>
                        <Text
                            className="text-xs font-semibold text-gray-800"
                            numberOfLines={1}
                        >
                            {item.title}
                        </Text>
                        <Text className="text-[10px] text-gray-500">{item.condition}</Text>
                        <Ratings rating={4} />
                        <Text className="text-sm font-bold text-green-700">
                            ₹ {item.price}
                        </Text>
                    </View>

                    <Text className="bg-green-100 text-[9px] text-center text-green-700 rounded-b-lg mt-2">
                        See More Like This
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};
