import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"

export default function Cast({cast, navigation}) {

  let personName = "Keanu Reeves";
  let characterName = "John Wick";


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
                    <TouchableOpacity onPress={()=> navigation.navigate("Person", person)} key={index} style={tw`mr-4 items-center`}>
                      <View style={tw`overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-700`}>
                      {/* <Image style={tw`rounded-2xl h-24 w-20`} source={require("../assets/images/castImage1.png")} /> */}
                      </View>
                        <Text style={tw`mr-4 items-center mt-1 text-xs text-white`}>
                            {
                              characterName.length > 10 ? characterName.slice(0, 10)+"..." : characterName
                            }
                        </Text>
                        <Text style={tw`mr-4 items-center text-xs mt-1 text-neutral-400`}>
                            {
                              personName.length > 10 ? personName.slice(0, 10)+"..." : personName
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}