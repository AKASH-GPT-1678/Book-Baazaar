import SellerListing from '@/components/sellerlisting';
import { ListingData } from '@/data/mockBooks';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  return (
    <View>
      <SellerListing books={ListingData}/>
    </View>


  )
}

export default Index;
