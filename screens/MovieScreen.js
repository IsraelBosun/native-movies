import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc"
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../component/Cast';


var { width, height } = Dimensions.get("window")
const ios = Platform.OS == "ios"
const topMargin = ios? "": `mt-3`;


export default function MovieScreen() {
    let movieName = "Ant-Man and the Wasp: Quantumania";


    const navigaton = useNavigation()

    const [isFavourite, setIsFavourite] = useState(false)
    const [cast, setCast] = useState([1, 2, 3, 4, 5])

    const {params: item} = useRoute();
    useEffect(()=> {

    }, [item])

  return (
    <ScrollView
    contentContainerStyle={{paddingBottom: 20}}
    style={tw`flex-1 bg-neutral-900`}
    >
      <View style={tw`w-full`}>
        <SafeAreaView style={tw`${topMargin} absolute  z-20 w-full flex-row justify-between items-center px-4`}>
            <TouchableOpacity onPress={()=> navigaton.goBack()} style={[tw`rounded-xl p-1`, styles.background]}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)}>
                <HeartIcon size="35" color={isFavourite? theme.background : "white"} />
            </TouchableOpacity>
        </SafeAreaView>

        <View>
            <Image source={require("../assets/images/moviePoster2.png")} style={{width, height: height * 0.55}} />
            <LinearGradient
            colors={["transparent", "rgba(23, 23, 23, 0.8)", "rgba( 23, 23, 23, 1)"]}
            style={[tw`absolute bottom-0`, { width, height: height * 0.4}]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            />
        </View>
      </View>

      <View style={[{marginTop: -(height * 0.09)}, tw`gap-y-3`]}>
        <Text style={tw`text-white text-center text-3xl font-bold tracking-wider`}>
            {movieName}
        </Text>

        <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
            Released • 2020 • 170 min
        </Text>
        <View style={tw`flex-row justify-center mx-4 gap-x-2`}>
            <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                Action • 
            </Text>
            <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                 Thrill • 
            </Text>
            <Text style={tw`text-neutral-400 font-semibold text-base text-center`}>
                 Comedy • 
            </Text>
        </View>
        <Text style={tw`text-neutral-400 mx-4 `}>
        Hello everyone 👋, today we are going to make a fully functional & responsive movie app with  react native using moviedb api, In this project you can browse trending, upcoming and top rated movies, you can see the details of a movie and the cast person, and you can even search any movie you want plus many more cool features. after t …
        </Text>
      </View>

      <Cast cast={cast} />
    </ScrollView>
  )
}