import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react'
import { Image, Text, View,SafeAreaView, TextInput, ScrollView } from 'react-native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import { Categories } from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client  from '../sanity';
// import { SafeAreaView } from 'react-native-safe-area-context';
export const HomeScreen = () => {

  const navigation = useNavigation();
  const [ featuredCategory, setFeaturedCategory ] = React.useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])

  useEffect(() => {
    client.fetch(`*[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`).then((data) => {
      setFeaturedCategory(data);
    }).catch(console.error);
  },)

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2  " >
        <Image source={{
          uri: "https://links.papareact.com/3pn"
        }}
        className="w-7 h-7 rounded-full  bg-slate-400 "
        />
        <View className="flex-1" >
          <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
          <Text className="font-bold text-xl ">Current Location <ChevronDownIcon size={20} color="#00CCBB" /> </Text>
        </View>
        <UserIcon size={25} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className=" flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2 items-center bg-gray-200 p-3 flex-1" >
          <MagnifyingGlassIcon color="gray" size={20} />

          <TextInput placeholder="Restaurent and cuisines" keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" size={30} />
      </View>

        {/* Body */}
      <ScrollView className="bg-gray-100" >
         {/* Categories */}
         <Categories/>

        {/* Featured Row */}
        {featuredCategory && featuredCategory.map((item) => (
          <FeaturedRow key={item._id} id={item?._id} title={item?.name} description={item?.short_description} />
        ))}
      
      </ScrollView>

    </SafeAreaView>
  )
}
