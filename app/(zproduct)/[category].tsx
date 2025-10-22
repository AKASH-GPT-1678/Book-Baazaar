import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import ReuseBooksView from '@/components/booksdisplay';
import ProductNotFound from '@/components/productNotfound';
const CategoryView = () => {
    const { category } = useLocalSearchParams();
    if(!category) return <ProductNotFound/>
    return (
        <View>
          <ReuseBooksView heading1={category.toString()} heading2={category.toString()} category={category.toString()} autoFetch={true} seeAll={true}/>
        </View>
    )
}

export default CategoryView;