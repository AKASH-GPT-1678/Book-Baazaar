import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReuseBooksView, { Item } from '@/components/booksdisplay';
export const booksData2: Item[] = [
    {
        id: 1,
        name: "Maharashtra Board 12th Complete Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "1 set available",
        rating: 4.8,
        deliveryTime: "3-5 days",
        price: 999,
        specialTag: "Board Essentials"
    },
    {
        id: 2,
        name: "JEE Mains + Advanced 11th & 12th Full Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "2 sets available",
        rating: 4.9,
        deliveryTime: "4-6 days",
        price: 1499,
        specialTag: "Engineering Prep"
    },
    {
        id: 3,
        name: "NEET Full Syllabus Textbook Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "1 set available",
        rating: 4.7,
        deliveryTime: "3-5 days",
        price: 1399,
        specialTag: "Medical Prep"
    },
    {
        id: 4,
        name: "Maharashtra Board 10th Complete Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "3 sets available",
        rating: 4.6,
        deliveryTime: "2-4 days",
        price: 799,
        specialTag: "SSC Kit"
    },
    {
        id: 5,
        name: "BBA Final Year All Subjects Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "2 sets available",
        rating: 4.5,
        deliveryTime: "5-7 days",
        price: 1199,
        specialTag: "College Bundle"
    },
    {
        id: 6,
        name: "MBA Entrance Exam Preparation Full Set",
        image: "https://bookly-app.s3.eu-north-1.amazonaws.com/jeebook.webp",
        quantity: "1 set available",
        rating: 4.9,
        deliveryTime: "3-6 days",
        price: 1599,
        specialTag: "Career Booster"
    }
];

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


                <ReuseBooksView heading1='Competetive Bundle' heading2='JEE/NEET/Board' slice1={0} slice2={6} data={booksData2} />
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