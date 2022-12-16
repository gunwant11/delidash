import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../redux/restaurentSlice';


const RestaurantScreen = () => {
    const { params } = useRoute();
    const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = params;
    const navigation = useNavigation();

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(
            setRestaurant({
                id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
            })
        )
    },[dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])


    return (<>

        <ScrollView>
            <View className='relative'>

                <Image
                    source={{
                        uri: imgUrl
                    }}
                    className="h-56 w-full rounded-sm p-4 bg-gray-300"
                />
                <TouchableOpacity className="absolute top-10 left-5" onPress={() => navigation.goBack()}>
                    <View className="bg-white rounded-full p-2">

                    <ArrowLeftIcon color="green" size={20} />
                    </View>
                </TouchableOpacity>

            </View>
            <View className="bg-white">
                <View className="px-3 pt-4">
                    <Text className="text-3xl font-bold" >{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity="0.5" size={22} />
                            <Text className="text-xs text-gray-500 " >
                                <Text className="text-green-500">{rating}</Text> . {genre}</Text>  
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color="green" opacity="0.5" size={22} />
                            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                        </View>
                    </View>
                    <Text className="text-xs text-gray-500">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 px-4 py-3 border-y-0 border-gray-300" >
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                    <Text className="pl-2  flex-1 text-md font-bold ">Have a food allergy?
                    </Text>
                    <ChevronRightIcon color="00CCBB" />
                </TouchableOpacity>
                    </View>

                <View className="pb-32">
                    <Text className="px-4 pt-3 mb-3 font-bold text-lg">Menu</Text>
                    {
                      dishes &&  dishes?.map((dish) => (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                imgUrl={ urlFor(dish.image).url()}
                                title={dish.name}
                                price={dish.price}
                                description={dish.short_description}
                            />
                        ))
                    }
                </View>


        </ScrollView>
        <BasketIcon/>
        </>
    )
}

export default RestaurantScreen