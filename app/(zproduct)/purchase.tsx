import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductNotFound from '@/components/productNotfound';
import { useSearchParams } from 'expo-router/build/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import ConfirmAddress from '@/components/confirmAddress';
const PurchasePage = () => {

    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');



    if (!productId) return <View className='flex items-center justify-center h-screen'>
        <ProductNotFound />
    </View>


    return (
        <SafeAreaView>
            <View className='bg-white'>
                <View className='flex flex-row gap-2 items-center'>
                <Ionicons name="arrow-back" size={24} color="black" className='ml-3' />
                <Text className='text-lg p-2'>Order Summary</Text>

                </View>
                <View>
                    <ConfirmAddress/>
                    
                    

                </View>

            </View>
        </SafeAreaView>

    )
}

export default PurchasePage;

const styles = StyleSheet.create({});