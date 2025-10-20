import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import Footer from './footer';
import ReuseBooksView from './booksdisplay';
import { router } from "expo-router";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import useFetch from '@/data/usefetch';
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



const IndexPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("Fiction");
  const token = useSelector((state: RootState) => state.user.token);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);


  return (
    <View style={styles.container}>

      <View >
        <Pressable className='bg-blue-500  rounded-2xl max-w-[120px] ml-auto mb-3 px-8 p-4'

          onPress={() => router.push({
            pathname: "/signin",

          })}

        >
          <Text className='text-white '>Sign In</Text>

        </Pressable>


      </View>




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
        className='mb-12'
      />
      <ScrollView className=''>



        <ReuseBooksView heading1="Best Sellers" heading2="Best Sellers" category='Technology' autoFetch={true} />

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
    marginBottom: 40,
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