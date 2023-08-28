import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MovieList from "../component/MovieList"
import Loading from '../component/Loading';

var { width, height} = Dimensions.get('window');
const ios = Platform.OS == "ios"
const verticalMargin = ios? "": `my-3`;

export default function PersonScreen() {

    const navigation = useNavigation();


    const [isFavourite, setIsFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4]);
    const [loading, setLoading] = useState(false)



  return (
    <ScrollView style={tw`flex-1 bg-neutral-900`} contentContainerStyle={{paddingBottom: 20}}>
      
      <SafeAreaView style={tw`${verticalMargin}   z-20 w-full flex-row justify-between items-center px-4`}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={[tw`rounded-xl p-1`, styles.background]}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)}>
                <HeartIcon size="35" color={isFavourite? "red": "white"} />
            </TouchableOpacity>
        </SafeAreaView>

        {
          loading ? (
            <Loading />
          ) : (
            <View>
            <View style={[tw`flex-row justify-center`, {shadowColor: 'red', shadowRadius: 40, shadowOffset: {width: 0, height: 5}, shadowOpacity: 1}]}>
              <View style={tw`items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500`}>
              {/* <Image source={require("../assets/images/castImage2.png")} style={{height: height* 0.43, width: width * 0.74}} /> */}
              </View>
            </View>
  
            <View style={tw`mt-6`}>
              <Text style={tw`text-3xl text-white font-bold text-center`}>
                Keanu Reeves
              </Text>
              <Text style={tw`text-base text-neutral-500 text-center`}>
                London, United Kingdom
              </Text>
            </View>
  
            <View style={tw`mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full`}>
              <View style={tw` border-r-2 border-r-neutral-400 px-2 items-center`}>
                <Text style={tw`text-white font-semibold`}>Gender</Text>
                <Text style={tw`text-neutral-300 text-sm`}>Gender</Text>
              </View>
  
              <View style={tw` border-r-2 border-r-neutral-400 px-2 items-center`}>
                <Text style={tw`text-white font-semibold`}>Birthday</Text>
                <Text style={tw`text-neutral-300 text-sm`}>1964-06-98</Text>
              </View>
  
              <View style={tw` border-r-2 border-r-neutral-400 px-2 items-center`}>
                <Text style={tw`text-white font-semibold`}>Known for</Text>
                <Text style={tw`text-neutral-300 text-sm`}>Acting</Text>
              </View>
  
              <View style={tw` px-2 items-center`}>
                <Text style={tw`text-white font-semibold`}>Popularity</Text>
                <Text style={tw`text-neutral-300 text-sm`}>34.44</Text>
              </View>
            </View>
  
            <View style={tw`my-6 mx-4 gap-2`}>
            <Text style={tw`text-white text-lg`}>Biography</Text>
            <Text style={tw`text-neutral-400 `}>
            Hello everyone 👋, today we are going to make a fully functional & responsive movie app with  react native using moviedb api, In this project you can browse trending, upcoming and top rated movies, you can see the details of a movie and the cast person, and you can even search any movie you want plus many more cool features. after this video you will be able to create professional apps like this one. so sit back and relax, grab some snacks and enjoy the tutorial.
            make sure you like this video and subscribe the channel for more react native videos.
  
            </Text>
            </View>
  
            <View>
              <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
            </View>
          </View>
          )
        }


    </ScrollView>
  )
}

{/* style={tw``} */}