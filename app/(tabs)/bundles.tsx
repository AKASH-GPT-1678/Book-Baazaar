import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TextInput, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReuseBooksView from '@/components/booksdisplay';
import { Picker } from '@react-native-picker/picker';
import { bookCategories } from '@/data/mockBooks';
import Footer from '@/components/footer';

const Bundles = () => {
    const [activeUrl, setActiveUrl] = React.useState("https://bookly-app.s3.eu-north-1.amazonaws.com/bookbaazar.jpg");
    const [activeCategory, setActiveCategory] = React.useState("all");





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
    }, []);;



    return (
        <SafeAreaView>








            <ScrollView>


                <View >
                    <TextInput placeholder='Search Books' className='p-4 bg-white' />

                    <Picker
                        selectedValue={activeCategory}
                        onValueChange={(itemValue) => setActiveCategory(itemValue)}
                        className="px-6 border-zinc-100"
                    >
                        {bookCategories.map((category, index) => (
                            <Picker.Item
                                key={index}
                                label={category.title}
                                value={category.title}
                            />
                        ))}
                    </Picker>




                </View>
                <View>
                    <ReuseBooksView heading1="Literature / Novels" heading2="New Arrival" category='others' autoFetch={true} />
                    <ReuseBooksView heading1="Self-Help" heading2="New Arrival" category='Textbook' autoFetch={true} />
                    <ReuseBooksView heading1="Children" heading2="Exciting Books for Children" category='Textbook' autoFetch={true} />
                    <Footer />

                </View>

            </ScrollView>


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
    },
    container: {
        display: "flex",
        flexDirection: "row",

        gap: 4,
        backgroundColor: "#FFFFFF",
        padding: 10
    }

})