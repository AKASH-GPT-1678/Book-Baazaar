import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListingData } from '@/data/mockBooks';

export interface Book {
    book: string;
    image: string;
}

// Props type for the component
interface SellerListingProps {
    books: Book[]; // component expects a list of books
}

// Functional component
const SellerListing: React.FC<SellerListingProps> = ({ books }) => {

    const renderItem = ({ item }: { item: Book }) => (
        <View style={styles.indiviDual}>
            <Image
                source={{ uri: item.image }}
                style={styles.bookImage}
            />
            <Text style={styles.bookTitle}>{item.book}</Text>
        </View>
    );

    return (
        <SafeAreaView>
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
