import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Switch, Alert, Platform } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { ENV } from '@/data/ENV';
const ListingForm = () => {
    const [bundle, setBundle] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [file, setImage] = React.useState<any>(null);
    const [error, setError] = React.useState("");
    const [condition, setSelectedCondition] = React.useState("Good");
    const token = useSelector((state: RootState) => state.user.token);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            console.log('ImagePicker result:', result.assets[0]);
            setImage(result.assets[0]);
        }
    };

    const categories = [
        "fiction",
        "nonfiction",
        "science",
        "technology",
        "business",
        "selfhelp",
        "history",
        "others"
    ]





    const handleSubmit = async () => {

        if (categories.includes(category.toLowerCase())) {

        }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("condition", condition);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("contact", contact);
        formData.append("bundle", bundle.toString());
        formData.append("category", category);

        if (file) {
            console.log("File object:", file);
            console.log("Platform:", Platform.OS);

            if (Platform.OS === "web" && file.file) {

                formData.append("image", file.file, file.fileName);
            } else {

                const fileToUpload = {
                    uri: file.uri,
                    type: file.mimeType || file.type || "image/jpeg",
                    name: file.fileName || file.name || "image.jpg",
                };


                formData.append("image", fileToUpload as any);
            }
        }

        try {
            const response = await axios.post(
                `${ENV.BASE_URL}/api/seller/list`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                    timeout: 30000,
                }
            );

            console.log("✅ Success response:", response.data);
            Alert.alert("Success", "Listing created successfully!");
            router.back();
        } catch (error: any) {
            console.error("❌ Full error object:", error);
            console.error("❌ Error response:", error.response?.data);
            console.error("❌ Error status:", error.response?.status);

            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong while creating the listing.";

            setError(errorMessage);
            Alert.alert("Error", errorMessage);
        }
    };

    return (
        <ScrollView>
            <View className='bg-white'>

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
                    <Picker
                        selectedValue={condition}
                        onValueChange={(itemValue) => setSelectedCondition(itemValue)}
                        className="px-6 border-zinc-100"
                    >
                        <Picker.Item label="New" value="NEW" />
                        <Picker.Item label="Like New" value="LIKE_NEW" />
                        <Picker.Item label="Good" value="GOOD" />
                        <Picker.Item label="Fair" value="FAIR" />
                        <Picker.Item label="Poor" value="POOR" />
                    </Picker>

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
                    <Text>
                        {error && <Text className="text-red-500">{error}</Text>}
                    </Text>

                    <Text className="text-lg font-bold pb-2">Contact (Phone/Email)</Text>
                    <TextInput
                        className="border-2 p-3 rounded-lg mb-4"
                        placeholder="Enter your contact"
                        value={contact}
                        onChangeText={setContact}
                    />

                    <Text className="text-lg font-bold pb-2">Image(s)</Text>
                    <Pressable className="border-2 p-3 rounded-lg mb-4 bg-gray-100" onPress={pickImage}>
                        <Text className="text-center text-gray-600">Upload Images</Text>
                    </Pressable>

                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-bold pb-2">Bundle</Text>
                        <Switch value={bundle} onValueChange={setBundle} />
                    </View>

                    <Text className="text-lg font-bold pb-2">Category</Text>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                        className="px-6 border-zinc-100"
                    >
                        {categories.map((cat) => (
                            <Picker.Item
                                key={cat}
                                label={cat.charAt(0).toUpperCase() + cat.slice(1)} 
                                value={cat}
                            />
                        ))}
                    </Picker>


                    <Pressable onPress={() => handleSubmit()}>
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
