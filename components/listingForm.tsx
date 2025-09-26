import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Button, Switch } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Label } from '@react-navigation/elements';
import { router } from 'expo-router';
const ListingForm = () => {
    const [bundle, setBundle] = React.useState(false);
    return (
        <ScrollView>
            <View className='bg-white'>
                <View style={{ backgroundColor: "#E8DBCF", padding: 10 }}>
                    <Pressable className='h-fit max-w-14 bg-red-400 rounded-full p-2 ml-2'
                    onPress={() => router.back()}
                    
                    
                    >
                        <Ionicons name="arrow-back" size={30} color="black" style={styles.icon} className='h-fit w-fit' />


                    </Pressable>
                    <Text className='text-3xl font-bold mt-8 pb-2' >Create New Listing</Text>
                    <Text className='text-lg font-semibold mt-4 pb-8'>Organizing your customer help you create quicker quotes and keep track of your inventory</Text>
                </View>
                <ScrollView className="px-5 mt-4">
                    {/* Title */}
                    <Text className="text-lg font-bold pb-2">Title / Name</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-4" placeholder="Enter book title" />

                    {/* Author */}
                    <Text className="text-lg font-bold pb-2">Author</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-4" placeholder="Enter author name" />

                    {/* Condition */}
                    <Text className="text-lg font-bold pb-2">Condition</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-4" placeholder="New / Like New / Used" />

                    {/* Price */}
                    <Text className="text-lg font-bold pb-2">Price (INR)</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-4" placeholder="Enter price" keyboardType="numeric" />

                    {/* Description */}
                    <Text className="text-lg font-bold pb-2">Description</Text>
                    <TextInput
                        className="border-2 p-3 rounded-lg mb-4"
                        placeholder="Enter book description"
                        multiline
                        numberOfLines={3}
                    />

                    {/* Contact */}
                    <Text className="text-lg font-bold pb-2">Contact (Phone/Email)</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-4" placeholder="Enter your contact" />

                    {/* Image Upload (Placeholder Button) */}
                    <Text className="text-lg font-bold pb-2">Image(s)</Text>
                    <Pressable className="border-2 p-3 rounded-lg mb-4 bg-gray-100">
                        <Text className="text-center text-gray-600">Upload Images</Text>
                    </Pressable>

                    {/* Bundle Toggle */}
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-bold pb-2">Bundle</Text>
                        <Switch value={bundle} onValueChange={setBundle} />
                    </View>


                    <Text className="text-lg font-bold pb-2">Category</Text>
                    <TextInput className="border-2 p-3 rounded-lg mb-6" placeholder="Fiction / Non-Fiction / Textbook" />

                    {/* Submit Button */}
                    <Pressable>
                        <Text className="text-lg font-bold bg-red-500 p-3 rounded-lg w-full text-center mb-4">Submit</Text>
                    </Pressable>

                    <Pressable>
                        <Text className="text-lg font-bold bg-white p-3 rounded-lg text-gray-400 w-full text-center mb-4">Cancel</Text>
                    </Pressable>

                </ScrollView>
                <View></View>
            </View>
        </ScrollView>
    )
}

export default ListingForm

const styles = StyleSheet.create({
    icon: {
        color: "black",
        padding: 4,


    }
})