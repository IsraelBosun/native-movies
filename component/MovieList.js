import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get("window")


export default function MovieList({title, data}) {
    let movieName = "Ant-Man and the Wasp: Quantumania";
    const navigation = useNavigation()

  return (
    <View style={tw`mb-8 `}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-xl`}>{title}</Text>
        <TouchableOpacity>
            <Text style={[styles.text, tw`text-lg`]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            data.map((item, index)=> {
                return (
                    <TouchableWithoutFeedback key={index} onPress={()=> navigation.navigate("Movie", item)}>
                        <View style={tw`mr-4 mt-3`}>
                        <Image source={require("../assets/images/moviePoster2.png")}
                        style={[tw`rounded-3xl`, {width: width* 0.33, height: height* 0.22}]}
                        />
                        <Text style={tw`text-neutral-300 ml-1`}>
                            {
                                movieName.length > 14 ? movieName.slice(0, 14)+"..." : movieName
                            }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })
        }
      </ScrollView>
    </View>
  )
}