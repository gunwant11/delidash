import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

import client, { urlFor } from '../sanity'

const FeaturedRow = ({id, title, description}) => {

  const [restaurants, setRestaurants] = React.useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          title
        }
        
        }
        }`,
        {id}
        ).then((data) => {
      setRestaurants(data[0].restaurants);
    }).catch(console.error);
  }, [id])



  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4 " >
        <Text className=" font-bold text-lg " >{title}</Text>
        <ArrowRightIcon  color="#00ccBB" />
      </View>
        <Text className="text-gray-400 text-sm px-4 " >{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
            >

              {restaurants?.map( (restaurant) => (
                <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  imgUrl={  urlFor( restaurant?.image).url() }
                  title={restaurant?.name}
                  rating={restaurant?.rating}
                  genre={restaurant?.type?.title}
                  address={restaurant?.address}
                  short_description={restaurant?.short_description}
                  dishes={restaurant?.dishes}
                  long={restaurant?.long}
                  lat={restaurant?.lat}
                />
              )
              )}
                </ScrollView>
    </View>
  )
}

export default FeaturedRow