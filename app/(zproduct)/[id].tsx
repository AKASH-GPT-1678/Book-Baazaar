import { FlatList, Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import useFetch from '@/data/usefetch';
import axios from 'axios';
import { ENV } from '@/data/ENV';
import LoadingScreen from '@/components/loadingScreen';
import ProductHighlights from '@/components/higlights';
import DeliveryDetailsComponent from '@/components/deliveryDetails';
import RatingsAndReviewsComponent from '@/components/reviews';
import ProductNotFound from '@/components/productNotfound';

const ProductView = () => {

    const { id } = useLocalSearchParams(); // Changed this lin
    const [active, setActive] = React.useState(0);
    const dataPoints = Array.from({ length: 10 }, (_, i) => i + 1);

    const loadProductById = async () => {
        try {
            const response = await axios.get(`${ENV.BASE_URL}/api/seller/load?id=${id}`);
            console.log(ENV.BASE_URL);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };



    if (!id) {
        return (
            <View style={styles.centered}>
                <ProductNotFound />
            </View>
        );
    };
    const { loading, error, data } = useFetch(loadProductById, true);

    if (loading) return <LoadingScreen />;
    if (error) return <ProductNotFound />


    const max = 50;
    const discount = Math.floor(Math.random() * max);
    if (data)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {/* Back Button */}
                        <Ionicons
                            name="arrow-back"
                            size={26}
                            color="black"
                            style={styles.backButton}
                            onPress={() => router.back()}
                        />


                        <View style={styles.imageWrapper}>
                            <View style={styles.iconWrapper}>
                                <Entypo name="heart-outlined" size={24} color="black" style={styles.icon} />
                                <Feather name="send" size={24} color="black" style={styles.icon} />
                            </View>
                            <Image
                                source={{ uri: data.imageUrl }}
                                style={styles.mainImage}
                                resizeMode="contain"
                            />
                        </View>


                        <View style={styles.dotsWrapper}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <Text
                                    key={index}
                                    style={[
                                        styles.dot,
                                        active === index && { color: '#2563EB' },
                                    ]}
                                >
                                    .
                                </Text>
                            ))}
                        </View>

                  
                        <View style={styles.detailsWrapper}>
                            <Text style={styles.selectedColor}>
                                Selected Color: <Text style={styles.colorValue}>Black</Text>
                            </Text>

                     
                            <FlatList
                                data={dataPoints}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.flatListContainer}
                                keyExtractor={(item) => item.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.itemContainer}>
                                        <Image
                                            source={{ uri: data.imageUrl }}
                                            style={styles.image}
                                            resizeMode="cover"
                                        />
                                    </View>
                                )}
                            />

                            {/* Product Info */}
                            <View style={styles.productInfo}>
                                <View style={styles.storeRow}>
                                    <Text style={styles.productName}>Noise</Text>
                                    <Link href="https://theakashgupta.com/">
                                        <Text style={styles.storeLink}>Visit Store</Text>
                                    </Link>
                                </View>
                                <Text style={styles.description}>{data.description}</Text>

                                {/* Price Section */}
                                <View style={styles.priceRow}>
                                    <Text style={styles.discount}>{discount}% OFF</Text>
                                    <Text style={styles.originalPrice}>{data.price}</Text>
                                    <Text style={styles.finalPrice}>{data.price}</Text>
                                </View>

                                {/* Extra Components */}
                                <ProductHighlights />
                                <DeliveryDetailsComponent />
                                <RatingsAndReviewsComponent />
                            </View>
                        </View>
                    </View>
                </ScrollView>

                {/* Bottom Buttons */}
                <View style={styles.buttonView}>
                    <Pressable style={styles.bottomButton}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.bottomButton, styles.buyNowButton]}
                        onPress={() =>
                            router.replace({
                                pathname: '/(zproduct)/purchase',
                                params: {
                                    productId: data.id,
                                    image: data.imageUrl,
                                    price: data.price,
                                    title: data.title,
                                },
                            })
                        }
                    >
                        <Text style={styles.buttonText}>Buy Now</Text>
                        <Text style={styles.buttonText}>at {data.price}</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
};

export default ProductView;

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    backButton: { position: 'absolute', left: 16, top: 16, zIndex: 10 },
    imageWrapper: { marginTop: 50, backgroundColor: '#E5E7EB', minHeight: 400, position: 'relative' },
    iconWrapper: { position: 'absolute', top: 10, right: 10, zIndex: 10 },
    icon: { backgroundColor: 'white', padding: 6, borderRadius: 8, marginBottom: 8, opacity: 0.7 },
    mainImage: { width: '100%', height: 350 },
    dotsWrapper: { flexDirection: 'row', justifyContent: 'center', marginTop: 12 },
    dot: { fontSize: 40, color: 'white', marginHorizontal: 2 },
    detailsWrapper: { paddingHorizontal: 16, paddingVertical: 8 },
    selectedColor: { fontWeight: 'bold', fontSize: 16 },
    colorValue: { fontWeight: '400' },
    flatListContainer: { paddingHorizontal: 8, gap: 10, marginTop: 6 },
    itemContainer: { width: 80, height: 80, borderRadius: 10, overflow: 'hidden', backgroundColor: '#f0f0f0' },
    image: { width: '100%', height: '100%' },
    productInfo: { marginTop: 16 },
    storeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    productName: { fontSize: 18, fontWeight: 'bold' },
    storeLink: { fontSize: 16, fontWeight: '600', color: '#2563EB' },
    description: { marginTop: 8, fontSize: 14, color: '#374151' },
    priceRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
    discount: { fontSize: 18, color: '#16A34A', fontWeight: 'bold' },
    originalPrice: { fontSize: 18, textDecorationLine: 'line-through', color: '#6B7280' },
    finalPrice: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
    buttonView: { flexDirection: 'row', gap: 6, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: 'white' },
    bottomButton: { flex: 1, padding: 12, borderWidth: 1, borderColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    buyNowButton: { backgroundColor: '#FACC15', borderColor: '#FACC15' },
    buttonText: { fontSize: 16, fontWeight: '600' },
});