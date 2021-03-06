import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PlaceRow = ({data}) => {
  console.log(data);
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home' ? (
          <Entypo name="home" size={20} color={'white'}></Entypo>
        ) : (
          <Entypo name="location-pin" size={20} color={'white'}></Entypo>
        )}
      </View>
      <Text style={styles.localtionText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;
