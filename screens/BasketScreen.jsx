import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurentSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import axios from 'axios'

// import { useStripe } from 'null-loader'

const BasketScreen = () => {

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const basketTotal = useSelector(selectBasketTotal)
  // const { initPaymentSheet, presentPaymentSheet } = useStripe()
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {})
    setGroupedItemsInBasket(groupedItems)
  }, [items])

  const onCheckout = async () => {
    //  create a payment intent
    //   const response = await axios.post('https://strip-payment.azurewebsites.net/api/delidash_function', {
    //               amount: basketTotal * 100
    //           })
    // if (!response.data.paymentIntent) {
    //   Alert.alert('Error', 'Something went wrong while processing your payment')
    //   return
    // }
   
    // const initialResponse = await initPaymentSheet({
    //   paymentIntentClientSecret: response.data.paymentIntent,
    //   merchantDisplayName: 'Delidash',
    // }) 

    // if (initialResponse.error) {
    //   console.log('error', initialResponse.error)
    //   Alert.alert('Error', 'Something went wrong while processing your payment')
    // } else {
    //  const paymentRespones=   await presentPaymentSheet()
    //   if(paymentRespones.error){
    //     Alert.alert('Error', 'Something went wrong while processing your payment')
    //     console.log('error', paymentRespones.error)
    //   };

    //   navigation.navigate('PreparingOrderScreen') 
    // }
      
  }


  return (
    <SafeAreaView className="flex-1 bg-white pt-3 " >
      <View className="flex-1 bg-gray-50">
        <View className="p-5 border-5 border-[#00ccbb] bg-white shadow-xs" >
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color={"#00CCBB"} height={40} width={40} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5" >
          <Image
            source={
              {
                uri: restaurant.imgUrl
              }
            }
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200" >
          {Object.entries(groupedItemsInBasket).map(([key, items])=>{
            return(
            <View key={key}
              className="flex-row items-center space-x-3 px-5 py-2 bg-white "
            >
              <Text className="text-[#00ccbb]" >{items.length} x </Text>
              <Image
                source={{ uri: items[0]?.imgUrl }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.title}</Text>
              <Text className="text-gray-600">
                Rs {items[0]?.price}
              </Text>

              <TouchableOpacity>
                <Text className="text-[#00ccbb] text-xs" onPress={()=> dispatch(removeFromBasket({id:key}))} >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
            )
          })}

        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400" >Subtotal</Text>
            <Text className="text-gray-400">Rs 
              {basketTotal}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400" >Delivery Fee</Text>
            <Text className="text-gray-400">Rs 
              40
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="" >Order Total</Text>
            <Text className="font-extrabold">Rs 
              {basketTotal + 40}
            </Text>
          </View>
        <TouchableOpacity className="bg-[#00ccbb] p-4 rounded-lg "  onPress={onCheckout } >
          <Text className="text-center text-white font-bold tetx-lg" >Place Order</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default BasketScreen