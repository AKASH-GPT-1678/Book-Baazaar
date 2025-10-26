import React from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import Ratings from "./ratings";
import useFetch from "@/data/usefetch";
import { Book } from "./sellerlisting";
import { router } from "expo-router";
import LoadListings from "@/data/listing";
import ProductNotFound from "./productNotfound";
import LoadingScreen from "./loadingScreen";
import axios from "axios";
import { ENV } from "@/data/ENV";
import { ProductCard } from "./bookpattern";
import { BookGrid } from "./charmproduct";


interface Props {

  heading1: string;
  heading2?: string;
  bgUrl?: string;
  category: string;
  autoFetch: boolean;
  seeAll: boolean

};

const ReuseBooksView: React.FC<Props> = ({


  heading1,
  heading2,
  category,
  bgUrl,
  autoFetch,
  seeAll

}) => {

  const addView = async (bookId: string) => {
    try {

      const response = await axios.put(`${ENV.BASE_URL}/api/product/view/${bookId}`);

    } catch (error) {
      console.log(error);


    }

  }
  const { loading, data, error, refresh } = useFetch(() => LoadListings(category), autoFetch);

  React.useEffect(() => {
    console.log("Category changed:", category);
    if (autoFetch) {
      refresh();
    }
  }, [category]);



  if (error) return <ProductNotFound />

  if (loading) return <LoadingScreen />


  if (data) {
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
            // <ProductCard onPress={
            //   () => {
            //     addView(item.id.toString());
            //     router.push({
            //       pathname: '/(zproduct)/[id]', // or whatever your actual route file is named
            //       params: { id: item.id.toString() },
            //     });
            //   }
            // }
            //   item={item}

            //   onAdd={() => console.log("hwlloworl")}


            // />

            <View>
              <BookGrid book={item} onBookPress={() => console.log("hello worl")} />
          
             
            </View>

          )}
          ListFooterComponent={() => (
            <Pressable

              onPress={
                () =>
                  router.push({
                    pathname: "/category",
                    params: { id: category.toString() }
                  })
              }


            >
              <View className="py-4 flex flex-row justify-center items-center text-center">
                <Text className=" text-blue-900 font-semibold">
                  See all products ▶
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    );

  }





};

export default ReuseBooksView;
