import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListingForm from '@/components/listingForm';

const NewProduct = () => {
    return (
        <SafeAreaView>
          <ListingForm/>
        </SafeAreaView>
    )
}

export default NewProduct;

const styles = StyleSheet.create({});