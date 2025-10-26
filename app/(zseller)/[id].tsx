import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListedProduct = () => {
    const { id } = useLocalSearchParams();
    return (
        <SafeAreaView>
            <View>
                <Text>ListedProduct</Text>
                <Text>{id}</Text>
            </View>
        </SafeAreaView>
    )
}

export default ListedProduct;

const styles = StyleSheet.create({});