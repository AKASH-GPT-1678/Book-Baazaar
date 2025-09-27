import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { ENV } from '@/data/ENV';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  condition: string;
  description: string;
  imageUrl: string;
  isBundle: boolean;
  price: number;
  sellerId: string;
  createdAt: string; 
  updatedAt: string;  

}
interface SellerListingProps {
    books: Book[];
}


const SellerListing = () => {
    const [loading, setLoading] = React.useState(true);
    const [books, setBooks] = React.useState<Book[]>([]);
    const [error, setError] = React.useState("");
    const token = useSelector((state: RootState) => state.user.token);
    const loadListings = async () => {
        try {

            const response = await axios.get(`${ENV.BASE_URL}/api/seller/listings`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = response.data;
            setBooks(data);
            if (data.success) {
               
            }
             setLoading(false);
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching listings:', error);
            setError('Failed to fetch listings');
            return [];
        }
    }





    const renderItem = ({ item }: { item: Book }) => (

        <TouchableOpacity onPress={() => console.log(item.title)}>
            <View style={styles.indiviDual}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.bookImage}
                />
                <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    React.useEffect(() => {
        loadListings();
    }, []);

    if (loading) {
        return (
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

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
                numColumns={2} 
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
