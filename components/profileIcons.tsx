import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
interface ProfileProps {
    leftIcon: React.ReactNode,
    title: string,
    route: string
}

const ProfileNavigation: React.FC<ProfileProps> = ({ leftIcon, title, route }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => router.push(route as any)} >

                <View className=' p-5 pr-12 flex flex-row justify-between  mt-2 border-b-2'>
                    {leftIcon}
                    <Text className={`text-lg font-bold ${title === "LogOut" ? "text-red-600" : "text-black"}`}>{title}</Text>
                    <Ionicons name="arrow-forward" size={24} color={`${title === "LogOut" ? "red" : "black"}`} />


                </View>
            </TouchableOpacity>

        </View>
    )
}

export default ProfileNavigation;

const styles = StyleSheet.create({});