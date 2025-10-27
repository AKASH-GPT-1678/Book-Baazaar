import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ENV } from '@/data/ENV';
import useFetch from '@/data/usefetch';
import LoadingScreen from '@/components/loadingScreen';
import ProductNotFound from '@/components/productNotfound';
import { Book } from '@/components/sellerlisting';

const FavoriteLists = () => {
  const token = useSelector((state: RootState) => state.user.token);

  const fetchFavorites = async (): Promise<Book[]> => {
    try {
      const response = await fetch(`${ENV.BASE_URL}/api/product/favorites`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.favorites; // assuming backend returns { favorites: Book[] }
    } catch (err) {
      console.log(err);
      throw new Error('Could not load book listings. Please try again later.');
    }
  };

  const { data, loading, error } = useFetch(fetchFavorites, true);

  if (loading) return <LoadingScreen />;
  if (error) return <ProductNotFound />;

  const renderItem = ({ item }: { item: Book }) => (
    <Pressable style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.condition}>{item.condition}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default FavoriteLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
  },
  info: {
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  author: {
    fontSize: 12,
    color: 'gray',
  },
  condition: {
    fontSize: 10,
    color: 'gray',
  },
  price: {
    fontWeight: 'bold',
    color: 'green',
    marginTop: 4,
  },
});
