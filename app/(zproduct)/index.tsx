import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { act } from 'react';
import { useSearchParams } from 'expo-router/build/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const ProductView = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const [active, setActive] = React.useState(0);
    const dataPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (!productId) return <View><Text>Nothing is Here </Text></View>

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <View className='px-20 bg-blue-100 py-4 '>
                    <Text className='text-center leading-10'></Text>
                </View>

                <View className='mt-6 bg-gray-200 py-6   min-h-[400px] w-full relative'>
                    <View className='absolute p-3 z-40 right-1 space-y-2 '>
                        <Entypo name="heart-outlined" size={24} color="black" className='bg-white p-2 rounded-lg opacity-70 ' />
                        <Feather name="send" size={24} color="black" className='bg-white p-2 mt-2 rounded-lg opacity-70' />
                    </View>
                    <Image source={require("../../assets/images/watch.png")} height={100} width={400} className='h-[350px] w-screen object-contain' />
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
                        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }} // spacing between first/last items and all items
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <Image
                                    source={require("../../assets/images/watch.png")}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.toString()}
                    />
                    


                </View>
            </View>


            <View style={styles.buttonView}>
                <Pressable style={styles.bottomButton} className='justify-center rounded-xl border border-gray-400'>
                    <Text className='text-center font-semibold '>Add to Cart</Text>
                </Pressable>
                <Pressable style={styles.bottomButton} className='bg-yellow-400 rounded-xl'>
                    <Text className='text-center font-semibold'>Buy Now</Text>
                    <Text className='text-center font-semibold'>at 999</Text>
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
        width: 150,
        height: 100,
        borderRadius: 10,
        overflow: "hidden", // ensures rounded corners for images
        backgroundColor: "#f0f0f0", // optional placeholder background
      },
      image: {
        width: "100%",
        height: "100%",
      },
})
