import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import Footer from './footer';
import ReuseBooksView from './booksdisplay';

const booksData = [
  { id: 1, category: "Fiction", book: "1984 by George Orwell", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757712982/lwzug8nbrdvephl8afvp.jpg" },
  { id: 2, category: "NonFiction", book: "Sapiens by Yuval Noah Harari", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713031/p9grxnrc6qkvi45is0ir.jpg" },
  { id: 3, category: "Science", book: "A Brief History of Time by Stephen Hawking", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713061/lvkgw7rpztub2nyszwoa.jpg" },
  { id: 4, category: "Technology", book: "Clean Code by Robert C. Martin", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713117/j4esxe1mo0iarmhmiamp.jpg" },
  { id: 5, category: "Business", book: "The Lean Startup by Eric Ries", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713152/wjqtytdugiqdnz6uddet.jpg" },
  { id: 6, category: "SelfHelp", book: "Atomic Habits by James Clear", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713184/wwxt0crlrrwyhqv4klf0.jpg" },
  { id: 7, category: "History", book: "Guns, Germs, and Steel by Jared Diamond", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713218/cybdldzksdu9fmbotrtw.jpg" },
  { id: 8, category: "Others", book: "The Lord of the Rings by J.R.R. Tolkien", image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713288/u4ofrezcnc7gds70nntw.jpg" },
];

export type Item = {
  id: number;
  name: string;
  image: string;
  quantity: string;
  rating: number;
  deliveryTime: string;
  price: number;
  specialTag: string;
};

export const booksData2: Item[] = [
  {
    id: 1,
    name: "1984 by George Orwell",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757712982/lwzug8nbrdvephl8afvp.jpg",
    quantity: "1 copy available",
    rating: 4.8,
    deliveryTime: "2-3 days",
    price: 199,
    specialTag: "Bestseller"
  },
  {
    id: 2,
    name: "Sapiens by Yuval Noah Harari",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713031/p9grxnrc6qkvi45is0ir.jpg",
    quantity: "2 copies available",
    rating: 4.9,
    deliveryTime: "3-4 days",
    price: 249,
    specialTag: "Reader's Choice"
  },
  {
    id: 3,
    name: "A Brief History of Time by Stephen Hawking",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713061/lvkgw7rpztub2nyszwoa.jpg",
    quantity: "3 copies available",
    rating: 4.7,
    deliveryTime: "2-5 days",
    price: 179,
    specialTag: "Science Classic"
  },
  {
    id: 4,
    name: "Clean Code by Robert C. Martin",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713117/j4esxe1mo0iarmhmiamp.jpg",
    quantity: "1 copy available",
    rating: 4.6,
    deliveryTime: "2-3 days",
    price: 299,
    specialTag: "Tech Must-Read"
  },
  {
    id: 5,
    name: "The Lean Startup by Eric Ries",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713152/wjqtytdugiqdnz6uddet.jpg",
    quantity: "2 copies available",
    rating: 4.5,
    deliveryTime: "3-4 days",
    price: 199,
    specialTag: "Business Guide"
  },
  {
    id: 6,
    name: "Atomic Habits by James Clear",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713184/wwxt0crlrrwyhqv4klf0.jpg",
    quantity: "5 copies available",
    rating: 4.9,
    deliveryTime: "2-3 days",
    price: 149,
    specialTag: "Self-Help Star"
  },
  {
    id: 7,
    name: "Guns, Germs, and Steel by Jared Diamond",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713218/cybdldzksdu9fmbotrtw.jpg",
    quantity: "1 copy available",
    rating: 4.4,
    deliveryTime: "4-6 days",
    price: 179,
    specialTag: "History Gem"
  },
  {
    id: 8,
    name: "The Lord of the Rings by J.R.R. Tolkien",
    image: "https://res.cloudinary.com/dffepahvl/image/upload/v1757713288/u4ofrezcnc7gds70nntw.jpg",
    quantity: "2 copies available",
    rating: 5.0,
    deliveryTime: "2-3 days",
    price: 299,
    specialTag: "Epic Fantasy"
  }
];

const IndexPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("Fiction");

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search Books' style={styles.textInput} />

      <FlatList
        data={booksData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setActiveCategory(item.category)}
            key={item.id}
          >
            <View style={[
              styles.itemContainer,
              activeCategory === item.category && styles.activeCategory
            ]}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <ScrollView>

        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <ReuseBooksView slice1={0} slice2={6} heading1="Best Sellers" heading2="Best Sellers" data={booksData2} />
        <Footer />
      </ScrollView>




    </View>
  )
}

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  textInput: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 12,
  },
  listContent: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    alignItems: "center",
    width: 80,
    paddingVertical: 8,
  },
  activeCategory: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "#aaa",
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    flexWrap: 'wrap',
  },
});