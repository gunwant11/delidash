import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import *  as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
            }, 4000);
            }, [])

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center " >
      <Animatable.Image
        animation="slideInUp"
        source={require('../assets/orderloading.gif')}
        className="w-96 h-96"
        iterationCount={1}
        />
        <Animatable.Text
            animation="slideInUp"
            className="text-white font-bold text-lg text-center my-6"
            iterationCount={1}
            >
                Waiting for Restaurent to accept your order!
        </Animatable.Text>
        <Progress.Circle size={50} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen