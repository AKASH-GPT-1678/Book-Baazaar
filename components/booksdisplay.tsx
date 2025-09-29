import React from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import Ratings from "./ratings";
import useFetch from "@/data/usefetch";

import { router } from "expo-router";
import LoadListings from "@/data/listing";
export type Item = {
  id: number;
  name: string;
  image: string;
  quantity: string;
  rating: number;
  deliveryTime: string;
  price: number;
  specialTag: string;
};

interface Props {
  slice1: number;
  slice2: number;
  heading1: string;
  heading2?: string;
  bgUrl?: string;
  category: string;
  data: Item[];
};

const ReuseBooksView: React.FC<Props> = ({
  data: products,
  slice1,
  slice2,
  heading1,
  heading2,
  category,
  bgUrl,
}) => {
  const product = products.slice(slice1, slice2);

  const { loading, data, error } = useFetch(() => LoadListings(category), false);






  return (
    <View className="mt-5">

      <View className="px-3 mb-3">
        <Text className="text-xl font-bold text-gray-900">{heading1}</Text>
        {heading2 && <Text className="text-sm text-gray-600">{heading2}</Text>}
      </View>


      <FlatList
        data={product}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({
            pathname: "/(zproduct)",
            params: { productId: item.id.toString() }
          })}>
            <View className="w-[140px] p-1 mb-5"  >
              <View className="bg-white rounded-xl shadow-sm p-2 relative h-[220px]">
                <Image
                  source={{ uri: item.image }}
                  className="h-[100px] w-full rounded-lg"
                  resizeMode="cover"

                />

                <Pressable className="absolute top-[85px] right-2 bg-white border border-green-600 rounded px-2 py-0.5">
                  <Text className="text-[10px] font-bold text-green-600">ADD</Text>
                </Pressable>


                <View className="mt-2">
                  <Text className="text-[10px] text-gray-500">{item.quantity}</Text>
                  <Text
                    className="text-xs font-semibold text-gray-800"
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text className="text-[10px] text-gray-500">
                    {item.deliveryTime}
                  </Text>
                  <Ratings rating={item.rating} />
                  <Text className="text-sm font-bold text-green-700">
                    ₹ {item.price}
                  </Text>
                </View>

                {/* Footer Tag */}
                <Text className="bg-green-100 text-[9px] text-center text-green-700 rounded-b-lg mt-2">
                  See More Like This
                </Text>
              </View>
            </View>
          </Pressable>
        )}
        ListFooterComponent={() => (
          <View className="py-4">
            <Text className="text-center text-blue-900 font-semibold">
              See all products ▶
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ReuseBooksView;
