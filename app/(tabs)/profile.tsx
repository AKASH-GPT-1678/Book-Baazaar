import { FlatList, ScrollView, StyleSheet, Text, Touchable, View, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import ProfileNavigation from '@/components/profileIcons';
import { profileAssets } from '../../data/profileassets';
import { router } from 'expo-router';
const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <ScrollView>
        <View >
          <View className='flex flex-row justify-between items-center p-4'>
            <Ionicons name="chevron-back" size={24} color="black"
              onPress={() => router.back()}


            />
            <Text className='text-2xl'>My Profile</Text>
            <Ionicons name="settings-outline" size={24} color="black" />
          </View>

          <View className='flex flex-row gap-3 items-center justify-center mt-6'>
            <Image source={require("../../assets/images/icon.png")} alt='profile' className='h-24 w-24 rounded-full' />
            <View>
              <Text className='text-xl font-bold'>Sabriyan Aryan</Text>
              <Text className='text-lg'>sabriyanaryan123@gmail.com</Text>
            </View>


          </View>
          <View>
            <FlatList
              data={profileAssets}
              horizontal={false}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 10, marginTop: 10, paddingRight: 20, padding: 6 }}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => router.push(item.route as any)}>
                  <ProfileNavigation leftIcon={item.icon} title={item.title} route={item.route} />
                </TouchableOpacity>




              }


            />


          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
