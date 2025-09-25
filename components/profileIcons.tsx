import {  StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ProfileProps {
    leftIcon: React.ReactNode,
    title: string
}

const ProfileNavigation: React.FC<ProfileProps> = ({ leftIcon, title }) => {
    return (
        <View>
            <View className=' p-6 flex flex-row justify-between border border-gray-200 mt-2'>
                {leftIcon}
                <Text className='text-lg'>{title}</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />


            </View>

        </View>
    )
}

export default ProfileNavigation

const styles = StyleSheet.create({})