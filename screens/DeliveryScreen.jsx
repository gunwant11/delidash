import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/restaurentSlice';
import { PhoneIcon, XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';
const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)

    return (
        <View className="bg-[#00ccbb] flex-1 pt-1 ">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5 py-6">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <XMarkIcon color={"white"} size={28} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg " > Order Help </Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shoadow-md" >
                    <View className="flex-row justify-between " >
                        <View>
                            <Text className="text-gray-400 text-lg" >Estimated Arrival </Text>
                            <Text className="text-bold text-3xl" >45-55 Minutes </Text>
                        </View>
                        <View>
                            <Image
                                source={{
                                    uri: 'https://links.papareact.com/fls'
                                }}
                                className="h-20 w-20 "
                            />
                        </View>
                    </View>
                        <Progress.Bar size={30} indeterminate={true} color={"#00ccbb"} />
                        <Text className="text-gray-400 mt-3 " >Your order at {restaurant.title} is being prepared </Text>
                </View>

            </SafeAreaView>
             {/* <MapView
                initialRegion={
                    {latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.006,
                    longitudeDelta: 0.006,}
                }
                className="flex-1 mt-10 z-0"
                mapType='mutedStandard' */}
            {/* > */}
                {/* <MapView.Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    pinColor={"#00ccbb"}
                /> */}

                {/* </MapView>  */}
                <SafeAreaView className="bg-white flex-row items-center space-x-5 mt-3 py-6 px-3">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className="h-12 w-12 rounded-full ml-5"/>
                    <View className="flex-1">
                        <Text className="font-bold text-lg" >Gunwant Wankhede </Text>
                        <Text className="text-gray-400 " >Your Rider </Text>
                        </View>
  
                        {/* CALL icon button */}
                        {/* <PhoneIcon color={"#00ccbb"} size={28} /> */}
                        <View className="flex-col items-center">
                            <PhoneIcon color={"#00ccbb"} size={28} />
                            <Text className="text-gray-400 text-sm" >Call </Text>
                        </View>
                    </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen