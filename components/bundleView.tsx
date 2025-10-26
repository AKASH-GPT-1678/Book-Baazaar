import React, { useEffect } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import Ratings from "./ratings";
import useFetch from "@/data/usefetch";
import { router } from "expo-router";
import { LoadBundles } from "@/data/bundles";
import axios from "axios";
import { ENV } from "@/data/ENV";

interface Props {
    heading1: string;
    heading2?: string;
 
    category: string;
    autoFetch: boolean;
    seeAll: boolean;
}

const BundlesView: React.FC<Props> = ({
    heading1,
    heading2,
    category,

    autoFetch,
    seeAll,
}) => {
    const addView = async (bookId: string) => {
        try {
            await axios.put(`${ENV.BASE_URL}/api/product/view/${bookId}`);
        } catch (error) {
            console.log(error);
        }
    };

    const { loading, data, error, refresh } = useFetch(
        () => LoadBundles(category),
        autoFetch
    );


    useEffect(() => {
        console.log("Category changed:", category);
        if (autoFetch) {
            refresh();
        }
    }, [category]);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading data</Text>;
    if (!data || data.length === 0)
        return (
            <View>
                <Text>No products found in this category.</Text>
            </View>
        );

    return (
        <View className="mt-5">
            <View className="px-3 mb-3">
                <Text className="text-xl font-bold text-gray-900">{heading1}</Text>
                {heading2 && <Text className="text-sm text-gray-600">{heading2}</Text>}
            </View>

            <FlatList
                data={seeAll ? data : data.slice(0, 6)}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            addView(item.id.toString());
                            router.push({
                                pathname: "/(zproduct)/[id]",
                                params: { id: item.id.toString() },
                            });
                        }}
                    >
                        <View className="w-[130px] p-1 mb-5">
                            <View className="bg-white rounded-xl shadow-sm p-2 relative h-[220px]">
                                <Image
                                    source={{ uri: item.imageUrl }}
                                    className="h-[100px] w-full rounded-lg"
                                    resizeMode="cover"
                                />

                                <Pressable className="absolute top-[85px] right-2 bg-white border border-green-600 rounded px-2 py-0.5">
                                    <Text className="text-[10px] font-bold text-green-600">
                                        ADD
                                    </Text>
                                </Pressable>

                                <View className="mt-2">
                                    <Text className="text-[10px] text-gray-500">{item.author}</Text>
                                    <Text
                                        className="text-xs font-semibold text-gray-800"
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text className="text-[10px] text-gray-500">
                                        {item.condition}
                                    </Text>
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
                )}
                ListFooterComponent={() => (
                    <Pressable
                        onPress={() =>
                            router.push({
                                pathname: "/category",
                                params: { id: category.toString() },
                            })
                        }
                    >
                        <View className="py-4 flex flex-row justify-center items-center text-center">
                            <Text className="text-blue-900 font-semibold">
                                See all products ▶
                            </Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default BundlesView;
