import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TextInput, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { bookCategories } from '@/data/mockBooks';
import Footer from '@/components/footer';
import BundlesView from '@/components/bundleView';

const Bundles = () => {
    const [activeUrl, setActiveUrl] = React.useState("https://bookly-app.s3.eu-north-1.amazonaws.com/bookbaazar.jpg");
    const [activeCategory, setActiveCategory] = React.useState("Engineering Entrance");





    React.useEffect(() => {



    }, [activeCategory]);;



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
                    <BundlesView category={activeCategory} heading1='Hello' heading2='hello' autoFetch={true} seeAll={true} />

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