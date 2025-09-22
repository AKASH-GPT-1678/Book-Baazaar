import React from 'react'
import { View, Text, Pressable } from 'react-native';

const ConfirmAddress = () => {
  return (
    <View className='px-4 mt-4 flex flex-col gap-4 p-4 '>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-lg font-bold'>Deliver to:</Text>
        <Pressable className='p-3 border border-gray-700 px-8 rounded-lg'>
          <Text className='text-blue-500 font-bold'>Change</Text>
        </Pressable>
      </View>
      <View className='flex flex-row gap-1 items-center'>
        <Text className='font-bold'>Akash Gupta</Text>
        <Text className='bg-slate-100 p-1 text-sm'>HOME</Text>

      </View>
      <View>
        <Text className='pr-12 '>
          Krishna store mumbra samrat nagar , Oppposite
          Kunal kamra China singh dhoni
          40061
        </Text>

      </View>
      <View>
        <Text>7208563916</Text>
      </View>


    </View>
  )
}

export default ConfirmAddress;