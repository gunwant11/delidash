import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50" >
      <TouchableOpacity className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1 ">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 "  >{items.lenght}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center" >View Basket</Text>
        <Text className="text-lg text-white font-extrabold" > Rs {basketTotal} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon