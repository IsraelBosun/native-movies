import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../component/Loading'

const {width, height} = Dimensions.get('window')

export default function SearchScreen() {

    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3, 4, 5]);
    const [loading, setLoading] = useState(false)

    let movieName = "Ant-Man and the Wasp: Quantumania"

  return (
    <SafeAreaView style={tw`bg-neutral-800 flex-1`}>
      <View style={tw`mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full`}>
        <TextInput placeholder='Search Movie' placeholderTextColor={"lightgray"} style={tw`pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider`} />
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={tw`rounded-full p-3 m-1 bg-neutral-500`}>
            <XMarkIcon size={"25"} color={"white"} />
        </TouchableOpacity>
      </View>

      {
        loading ? (
            <Loading />
        ) : (

                results.length > 0 ? (
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal: 15}}
                    style={tw`gap-y-3`}  
                    >
                      <Text style={tw`text-white font-semibold mt-1`}>Results ({results.length}) </Text>
                      <View style={tw`flex-row justify-between flex-wrap mt-4`}>
                          {
                              results.map((item, index)=> {
                                  return (
                                      <TouchableOpacity key={index} onPress={()=> navigation.push("Movie", item)}>
                                          <View style={tw`gap-y-2 mb-4`}> 
                                              {/* <Image
                                              style={[tw`rounded-3xl`, {width: width* 0.44, height: height*0.3}]}
                                              source={require("../assets/images/moviePoster2.png")}
                                              /> */}
                                              <Text style={tw`text-neutral-300`}>
                                                  {
                                                      movieName.length > 22 ? movieName.slice(0, 20)+"..." : movieName
                                                  }
                                              </Text>
                                          </View>
                                      </TouchableOpacity>
                                  )
                              })
                          }
                      </View>
                    </ScrollView>
                ) : (
                    <View style={tw`flex-row justify-center`}>
                        {/* <Image source={require("../assets/images/movieTime.png")} style={tw`h-96 w-96`} /> */}
                    </View>
                )

        )
      }




    </SafeAreaView>
  )
}