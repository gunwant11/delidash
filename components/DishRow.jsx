import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../redux/basketSlice'

const DishRow = ({

    id,
    imgUrl,
    title,
    price,
    description,
}) => {
  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const [isPressed, setIsPressed]  = useState(false)
  const dispatch = useDispatch()

  const addItemToBasket = () =>{
    dispatch(addToBasket({ 
      id,
      imgUrl,
      title,
      price  : Number(price),
      description, 
    }))
  }
  
  const removeItemFromBasket = () =>{
    if(!items.length > 0 ) return;
    dispatch(removeFromBasket({id}));
  }

  return (
    <>
      <TouchableOpacity onPress={()=> setIsPressed(!isPressed) } className={`bg-white border border-slate-200  p-3 ${isPressed && "border-b-0"} `}>
          <View className="flex-row">
            <View className="flex-1 pr-2" >
                <Text className="text-lg mb-1" >{title}</Text>
                <Text className="text-gray-400" >{description}</Text>
                <Text className=" text-gray-400 mt-1 " >
                    <Text className="text-green-500 font-bold" >Rs {price} </Text>
                </Text>
            </View>
            <View>
                <Image
                    style={{
                      borderWidth: 1,
                      borderColor: '#f3f3f4',
                    }}
                    source ={{
                      uri : imgUrl
                    }}
                    className="h-20 w-20 bg-gray-300 p-4"
                    />
            </View>
          </View>
      </TouchableOpacity>
      {
        isPressed && 
          (
            <View className="bg-white px-3" >
              <View className="flex-row items-center space-x-2 pb-3 ">
                <TouchableOpacity onPress={removeItemFromBasket}  disabled={!items.length} >
                  <MinusCircleIcon size={40} 
                   color={ items.length > 0 ?  "#00ccBB" : "gray"} 
                   />
                </TouchableOpacity>
                <Text>{items && items.length}</Text>
                <TouchableOpacity onPress={addItemToBasket} >
                  <PlusCircleIcon size={40}
                  color={"#00ccBB"}  />
                </TouchableOpacity>
              </View>
            </View>
          )
        
      }
    </>
  )
}

export default DishRow