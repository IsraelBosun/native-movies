import { View, Text, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc"
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from '../theme';
import TrendingMovies from '../component/TrendingMovies';
import MovieList from '../component/MovieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../component/Loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/MovieDb';

const ios = Platform.OS == "ios";
export default function HomeScreen() {

    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();

    useEffect(() => {
      getTrendingMovies();
      getUpcomingMovies();
      getTopRatedMovies();
    })

    const getTrendingMovies = async () => {
      const data = await fetchTrendingMovies();
      // console.log("get trending movies", data);
      if(data && data.results) setTrending(data.results);
      setLoading(false)
    }

    const getUpcomingMovies = async () => {
      const data = await fetchUpcomingMovies();
      // console.log("get upcoming movies", data);
      if(data && data.results) setUpcoming(data.results);
      setLoading(false)
    }

    const getTopRatedMovies = async () => {
      const data = await fetchTopRatedMovies();
      // console.log("get trending movies", data);
      if(data && data.results) setTopRated(data.results);
      setLoading(false)
    }


  return (
    <View style={tw`flex-1 bg-neutral-800`}>
      <SafeAreaView style={tw`${ ios? "-mb2" : "mt-9"}`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
            <Text style={tw`text-white text-3xl font-bold`}>
                <Text style={styles.text}>M</Text>ovies
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
                <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      {
        loading ? (
          <Loading />
        ) : (
          <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30}}
          >
            {trending.length > 0 && <TrendingMovies data={trending} /> }
            
    
            <MovieList title="Upcoming" data={upcoming} />
    
            <MovieList title="Top Rated" data={topRated} />
          </ScrollView>
        )
      }
    </View>
  )
}