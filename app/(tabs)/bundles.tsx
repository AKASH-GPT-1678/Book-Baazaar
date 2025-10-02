import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReuseBooksView  from '@/components/booksdisplay';


const Bundles = () => {
    const [activeUrl, setActiveUrl] = React.useState("https://bookly-app.s3.eu-north-1.amazonaws.com/bookbaazar.jpg");




    React.useEffect(() => {
        const urls = [
            "https://bookly-app.s3.eu-north-1.amazonaws.com/bookbaazar.jpg",
            "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        ];

        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % urls.length; // toggle between 0 and 1
            setActiveUrl(urls[index]);
        }, 3000);

   
        return () => clearInterval(interval);
    }, []);
    return (
        <SafeAreaView>






            <Image
                src={activeUrl.toString()}
                alt="images"
                width={800}
                height={400}
                className="w-full h-60 object-cover rounded-xl p-8"
            />

            <View style={styles.views}>


            
            </View>


        </SafeAreaView>
    )
}

export default Bundles;
const styles = StyleSheet.create({
    views: {
        marginTop: 6,
        display: 'flex',
        alignItems: "center"
    },
    heading: {
        fontFamily: "Times New Roman",
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 8
    }

})