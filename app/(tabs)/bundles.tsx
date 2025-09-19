import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Bundles = () => {
    return (
        <SafeAreaView>






            <Image
                src="https://bookly-app.s3.eu-north-1.amazonaws.com/bookbaazar.jpg"
                alt="images"
                width={800}
                height={400}
                className="w-full h-48 object-cover rounded-lg p-8"
            />

            <View style={styles.views}>
                <Text style={styles.heading}>Competetition</Text>
            </View>


        </SafeAreaView>
    )
}

export default Bundles;
const styles = StyleSheet.create({
    views: {
       marginTop : 6
    },
    heading : {
        fontFamily:  "Times New Roman",
        fontSize : 18,
        fontWeight: "bold",
        paddingHorizontal : 8
    }

})