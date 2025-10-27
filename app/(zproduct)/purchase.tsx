import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductNotFound from '@/components/productNotfound';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import ConfirmAddress from '@/components/confirmAddress';
import { Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { Pressable } from 'react-native';
import PriceDetails from '@/components/priceDetails';
import axios from 'axios';
import { ENV } from '@/data/ENV';
import { router } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const PurchasePage = () => {

    const { productId, title, image, price } = useLocalSearchParams();
    const [quantity, setQuantity] = React.useState<number>(2);
    const token = useSelector((state: RootState) => state.user.token);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const [selctedquantity, setSelectedQuantity] = React.useState<string>("");

    async function placeOrder(productId: string, quantity: number) {
        if (!isLoggedIn) {
            Alert.alert("login to make orders")
        }
        try {

            const response = await axios.post(`${ENV.BASE_URL}/api/product/placeorder`, {
                productId,
                quantity,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            // Response from backend
            console.log("Order placed successfully:", response.data);
            return response.data;
        } catch (error: any) {
            console.error("Error placing order:", error.response?.data || error.message);
            throw error;
        }
    };




    if (!productId) return <View className='flex items-center justify-center h-screen'>
        <ProductNotFound />
    </View>


    return (
        <SafeAreaView>
            <ScrollView>
                <View className='bg-white h-screen'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Ionicons name="arrow-back" size={24} color="black" className='ml-3'
                            onPress={() => router.back()}



                        />
                        <Text className='text-lg p-2'>Order Summary</Text>

                    </View>
                    <View>
                        <ConfirmAddress />
                        <View className='p-2'>
                            <Text className='text-green-700 p-1 bg-green-200 max-w-[150px] text-sm'>Lowest price in the year</Text>
                        </View>
                        <View className='flex flex-row gap-4 h-fit pr-20'>
                            <View className='p-2  h-fit'>
                                <Image source={{ uri: image.toString() }} alt='images' className='h-[100px] w-[80px]' />
                                <Picker
                                    selectedValue={selctedquantity}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedQuantity(itemValue)
                                    }
                                    className='px-6 border-zinc-100'


                                >
                                    <Picker.Item label="1" value="0" />
                                    <Picker.Item label="2" value="1" />
                                    <Picker.Item label="3" value="2" />
                                    <Picker.Item label="4" value="3" />
                                    <Picker.Item label="5" value="4" />

                                </Picker>
                            </View>

                            <View className=' pr-16 line-clamp-2'>
                                <Text className='text-lg'>RealTime Watch and Dear My name is abrar ali shaikh and my name is bilawal ali bhutto</Text>
                                <Text className='text-gray-400'>Blck in the Ear</Text>
                                <View className='flex flex-row gap-2 items-center'>
                                    <Text className='text-green-700 text-xl'><AntDesign name="arrow-down" size={18} color="green" />61%</Text>
                                    <Text className='line-through text-xl'>8999</Text>
                                    <Text className='font-bold  text-xl'>₹{price}</Text>

                                </View>

                            </View>


                        </View>
                        <View className='pb-3'>
                            <Text> Delivery By 25 March</Text>
                        </View>



                    </View>
                    <View className='mt-4 mb-4'>
                        <PriceDetails />
                    </View>
                    <View style={styles.buttonView}>

                        <Text className='text-end font-semibold text-xl mt-4 '>{price}</Text>

                        <Pressable style={styles.bottomButton} className='bg-yellow-400 rounded-xl max-w-72  '
                            onPress={() => placeOrder(productId.toString(), quantity)}




                        >
                            <Text className='text-center font-semibold'>Continue</Text>

                        </Pressable>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

export default PurchasePage;

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: "row",
        gap: 6,
        width: "100%",
        justifyContent: "space-between",
        alignContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: "absolute",
        bottom: 6,
        backgroundColor: "white"
    },
    bottomButton: {
        flex: 1,
        padding: 12,
        borderColor: "black",
    },
});