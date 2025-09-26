import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Switch, Alert } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import axios from 'axios';
import { ENV } from '@/data/ENV';
const ListingForm = () => {
  const [bundle, setBundle] = React.useState(false);


  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [category, setCategory] = React.useState("");
  


  const handleSubmit = async () => {
    const listingData = {
      title,
      author,
      condition,
      price,
      description,
      contact,
      bundle,
      category,
 
    };

    try {
      // Example: sending to backend
      const response = await axios.post(`${ENV.BASE_URL}aoi/listings`, listingData);
      Alert.alert("Success", "Listing created successfully!");
      router.back(); 
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong while submitting");
    }
  };

  return (
    <ScrollView>
      <View className='bg-white'>
        {/* Header */}
        <View style={{ backgroundColor: "#E8DBCF", padding: 10 }}>
          <Pressable
            className='h-fit max-w-14 bg-red-400 rounded-full p-2 ml-2'
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={30} color="black" style={styles.icon} />
          </Pressable>
          <Text className='text-3xl font-bold mt-8 pb-2'>Create New Listing</Text>
          <Text className='text-lg font-semibold mt-4 pb-8'>
            Organizing your customer help you create quicker quotes and keep track of your inventory
          </Text>
        </View>

        {/* Form */}
        <ScrollView className="px-5 mt-4">
          <Text className="text-lg font-bold pb-2">Title / Name</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="Enter book title"
            value={title}
            onChangeText={setTitle}
          />

          <Text className="text-lg font-bold pb-2">Author</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="Enter author name"
            value={author}
            onChangeText={setAuthor}
          />

          <Text className="text-lg font-bold pb-2">Condition</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="New / Like New / Used"
            value={condition}
            onChangeText={setCondition}
          />

          <Text className="text-lg font-bold pb-2">Price (INR)</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="Enter price"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <Text className="text-lg font-bold pb-2">Description</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="Enter book description"
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />

          <Text className="text-lg font-bold pb-2">Contact (Phone/Email)</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-4"
            placeholder="Enter your contact"
            value={contact}
            onChangeText={setContact}
          />

          <Text className="text-lg font-bold pb-2">Image(s)</Text>
          <Pressable className="border-2 p-3 rounded-lg mb-4 bg-gray-100">
            <Text className="text-center text-gray-600">Upload Images</Text>
          </Pressable>

          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold pb-2">Bundle</Text>
            <Switch value={bundle} onValueChange={setBundle} />
          </View>

          <Text className="text-lg font-bold pb-2">Category</Text>
          <TextInput
            className="border-2 p-3 rounded-lg mb-6"
            placeholder="Fiction / Non-Fiction / Textbook"
            value={category}
            onChangeText={setCategory}
          />

          {/* Submit + Cancel */}
          <Pressable onPress={handleSubmit}>
            <Text className="text-lg font-bold bg-red-500 p-3 rounded-lg w-full text-center mb-4 text-white">
              Submit
            </Text>
          </Pressable>

          <Pressable onPress={() => router.back()}>
            <Text className="text-lg font-bold bg-white p-3 rounded-lg text-gray-400 w-full text-center mb-4">
              Cancel
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ListingForm;

const styles = StyleSheet.create({
  icon: {
    color: "black",
    padding: 4,
  },
});
