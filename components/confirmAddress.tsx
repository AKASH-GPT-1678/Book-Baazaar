import { router } from 'expo-router';
import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { ENV } from '@/data/ENV';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

const ConfirmAddress = () => {
  const [address, setAddress] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const token = useSelector((state: RootState) => state.user.token);


  // fetchUserAddress.ts

  React.useEffect(() => {
    const fetchUserAddress = async (token: string) => {
      const query = `
    query GetUserAddress {
      getUserData {
        address
      }
    }
  `;

      const response = await fetch(`${ENV.BASE_URL}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // include JWT if your backend requires it
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      console.log(result);
      return result.data.getUserData.address;
    };
    fetchUserAddress(token).then((address) => {
      setAddress(address);
      setLoading(false);
    });

  }, []);




  return (
    <View className='px-4 mt-4 flex flex-col gap-4 p-4 '>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-lg font-bold'>Deliver to:</Text>
        <Pressable className='p-3 border border-gray-700 px-8 rounded-lg'
          onPress={() => router.push('/forms/adressform')}

        >
          <Text className='text-blue-500 font-bold'>Change</Text>
        </Pressable>
      </View>
      <View className='flex flex-row gap-1 items-center'>
        <Text className='font-bold'>Akash Gupta</Text>
        <Text className='bg-slate-100 p-1 text-sm'>HOME</Text>

      </View>
      <View>
        <Text className='pr-12 '>
          {address}
        </Text>

      </View>
      <View>
        <Text>7208563916</Text>
      </View>


    </View>
  )
}

export default ConfirmAddress;