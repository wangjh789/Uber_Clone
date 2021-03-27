import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = props => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}></View>
      <HomeMap />
      <View />

      {/* {Cvoid message} */}
      <CovidMessage />

      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
