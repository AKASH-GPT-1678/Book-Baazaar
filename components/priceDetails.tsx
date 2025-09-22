import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Footer from './footer';

const PriceDetails = () => {
    return (
        <View className=' mt-6 p-4 px-4'>
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-2xl'>PriceDetails</Text>
                <AntDesign name="caret-down" size={20} color="black" />

            </View>
            <View className='flex flex-row justify-between'>
                <Text className='text-lg'>Price (1 Item)</Text>
                <Text className='text-lg'>179999</Text>

            </View>
            <View className='flex flex-row justify-between'>
                <Text className='text-lg'>Discount</Text>
                <Text className='text-lg text-green-600'>-17000</Text>

            </View>
            <View className='flex flex-row justify-between'>
                <Text className='text-lg'>Protect Promise Fee</Text>
                <Text className='text-lg'>29</Text>

            </View>
            <View className='flex flex-row justify-between'>
                <Text className='text-lg'>Total</Text>
                <Text className='text-lg'>2000</Text>

            </View>

        </View>
    )
}

export default PriceDetails;

const styles = StyleSheet.create({})