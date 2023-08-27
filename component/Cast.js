import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"

export default function Cast({cast}) {
  return (
    <View style={tw`my-6`}>
      <Text style={tw`text-white text-lg mx-4 mb-5`}>Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            cast && cast.map((person, index)=> {
                return(
                    <TouchableOpacity key={index} style={tw`mr-4 items-center`}>
                        <Text style={tw`mr-4 items-center text-white`}>
                            John wick
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}