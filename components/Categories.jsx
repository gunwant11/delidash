import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import client, { urlFor } from '../sanity';
import CategoryCard from './CategoryCard'

export const Categories = () => {

  const [categories, setCategories] = React.useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`
        ).then((data) => {
      setCategories(data);
    }).catch(console.error);
  }, [])

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >

{categories?.map( (category) => (
        <CategoryCard 
          key={category._id}  
          imgUrl={urlFor(category?.image).width(200).url()}
          title={category?.title}
        />
      ))}


    </ScrollView>
  )
}
