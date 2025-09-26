import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ENV } from '@/data/ENV';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

export interface Book {
    book: string;
    image: string;
}


interface SellerListingProps {
    books: Book[]; 
}


const SellerListing: React.FC<SellerListingProps> = ({ books }) => {

    const renderItem = ({ item }: { item: Book }) => (

        <TouchableOpacity onPress={() => console.log(item.book)}>
            <View style={styles.indiviDual}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.bookImage}
                />
                <Text style={styles.bookTitle}>{item.book}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView>
            <View className='p-4'>
                <Pressable className='flex flex-row max-w-40 text-center p-2 text-white items-center gap-2 bg-blue-400 py-2 px-4 rounded-lg'
                onPress={() => router.push("/(zseller)/newproduct")}
                
                
                >
                    <Feather name="plus" size={24} color="black" />
                    <Text>New Listing</Text>
                </Pressable>
            </View>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.container}
                numColumns={2} // Optional: 2 books per row
            />
        </SafeAreaView>
    )
}

export default SellerListing

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: "center",
    },
    indiviDual: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        margin: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5, // for Android shadow
    },
    bookImage: {
        width: 140,
        height: 200,
        borderRadius: 12,
        marginBottom: 12,
        resizeMode: "cover",
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
})
