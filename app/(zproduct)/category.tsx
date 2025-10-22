import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ReuseBooksView from '@/components/booksdisplay';

const CategoryView = () => {
    const { id } = useLocalSearchParams();

    if(!id) return null

    return (
        <View>
          <ReuseBooksView category={id.toString()} heading1="Category" heading2={id.toString()} autoFetch={true} seeAll={true} />
        </View>
    )
}

export default CategoryView

const styles = StyleSheet.create({})