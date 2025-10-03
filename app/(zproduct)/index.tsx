import { FlatList, Pressable, StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { act } from 'react';
import { useSearchParams } from 'expo-router/build/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import ProductHighlights from '@/components/higlights';
import DeliveryDetailsComponent from '@/components/deliveryDetails';
import RatingsAndReviewsComponent from '@/components/reviews';
import ProductNotFound from '@/components/productNotfound';
import { Ionicons } from '@expo/vector-icons';
import useFetch from '@/data/usefetch';
import axios from 'axios';
import { ENV } from '@/data/ENV';
import LoadingScreen from '@/components/loadingScreen';
const ProductView = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const [active, setActive] = React.useState(0);
    const dataPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const loadProductById = async () => {
        try {
            const response = await axios.get(`${ENV.BASE_URL}/api/product/${productId}`)
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);


        }

    }
    const { loading, error, data } = useFetch(loadProductById, true);



    if (!productId || error) return <View className='flex items-center justify-center h-screen'>
        <ProductNotFound />
    </View>

    if(loading){
        return <LoadingScreen/>
    }

  if(data)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1 }} className='relative'>
                    <Ionicons name="arrow-back" size={26} color="black" className='absolute left-4'
                        onPress={() => router.back()}



                    />

                    <View className='px-20 bg-blue-100 py-4 '>
                        <Text className='text-center leading-10'></Text>
                    </View>

                    <View className='mt-6 bg-gray-200 py-6   min-h-[400px] w-full relative'>
                        <View className='absolute p-3 z-40 right-1 space-y-2 '>
                            <Entypo name="heart-outlined" size={24} color="black" className='bg-white p-2 rounded-lg opacity-70 ' />
                            <Feather name="send" size={24} color="black" className='bg-white p-2 mt-2 rounded-lg opacity-70' />
                        </View>
                        <Image source={{uri : data.imageUrl}} height={100} width={400} className='h-[350px] w-screen object-contain' />
                    </View>
                    <View className='flex flex-row mx-auto mt-4'>

                        {Array.from({ length: 6 }).map((item, index) => (
                            <Text className={`${active === index ? 'text-blue-700 ' : "text-white"} text-7xl text-white p-0 m-0`} key={index}>.</Text>

                        ))}
                    </View>
                    <View className=' px-8 py-2'>
                        <Text className='font-bold text-black '>
                            Selected Color : <Text style={{ fontWeight: "400", }}>Black</Text>
                        </Text>
                        <FlatList
                            data={dataPoints}
                            horizontal
                            showsHorizontalScrollIndicator={false} // hide scroll bar
                            contentContainerStyle={{ paddingHorizontal: 8, gap: 10, marginTop: 6 }} // spacing between first/last items and all items
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <Image
                                        source={{uri : data.imageUrl}}
                                        style={styles.image}
                                        resizeMode="cover"
                                    />
                                </View>
                            )}
                            keyExtractor={(item) => item.toString()}
                        />

                        <View className='mt-4 flex flex-col gap-4'>
                            <View className='flex flex-row gap-2 items-center '>
                                <Text className='text-xl font-bold'>Noise</Text>
                                <Link href="https://theakashgupta.com/">
                                    <Text className="text-blue-500 font-semibold">Visit Store</Text>
                                </Link>
                            </View>
                            <Text>
                               {data.description}
                            </Text>
                            <View className='flex flex-row gap-2 items-center'>
                                <Text className='text-green-700 text-xl'>↓61%</Text>
                                <Text className='line-through text-xl'>8999</Text>
                                <Text className='font-bold  text-xl'>₹3,499</Text>

                            </View>
                            <ProductHighlights />
                            <DeliveryDetailsComponent />
                            <RatingsAndReviewsComponent />
                        </View>






                    </View>
                </View>

            </ScrollView>


            <View style={styles.buttonView}>
                <Pressable style={styles.bottomButton} className='justify-center rounded-xl border border-gray-400'>
                    <Text className='text-center font-semibold '>Add to Cart</Text>
                </Pressable>
                <Pressable style={styles.bottomButton} className='bg-yellow-400 rounded-xl'
                    onPress={() => router.replace({
                        pathname: "/(zproduct)/purchase",
                        params: { productId: data.id, image: data.imageUrl , prce : data.price , titile : data.title  }
                    })}




                >
                    <Text className='text-center font-semibold'>Buy Now</Text>
                    <Text className='text-center font-semibold'>at {data.price}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ProductView;

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: "row",
        gap: 6,
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: "absolute",
        bottom: 6,
        backgroundColor: "white" // so it doesn’t overlap content invisibly
    },
    bottomButton: {
        flex: 1,
        padding: 12,
        borderColor: "black",
    },
    itemContainer: {
        width: 80,
        height: 80,
        borderRadius: 10,
        overflow: "hidden", // ensures rounded corners for images
        backgroundColor: "#f0f0f0", // optional placeholder background
    },
    image: {
        width: "100%",
        height: "100%",
    },
})
