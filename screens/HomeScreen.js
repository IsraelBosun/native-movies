import { View, Text, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from '../theme';
import TrendingMovies from '../component/TrendingMovies';
import MovieList from '../component/MovieList';

const ios = Platform.OS == "ios";
export default function HomeScreen() {

    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

  return (
    <View style={tw`flex-1 bg-neutral-800`}>
      <SafeAreaView style={tw`${ ios? "-mb2" : "mt-9"}`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
            <Text style={tw`text-white text-3xl font-bold`}>
                <Text style={styles.text}>M</Text>ovies
            </Text>
            <TouchableOpacity>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
      >
        <TrendingMovies data={trending} />

        <MovieList title="Upcoming" data={upcoming} />

        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  )
}