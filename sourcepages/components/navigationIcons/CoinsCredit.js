import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Removed curly braces
import AppDesign from '../../design/StyleSheetD';

const CoinsCredit = (props) => {
  return (
    <TouchableOpacity style={AppDesign.CoinsCreditTouch} onPress={props.iconPressed}>
      <Icon style={AppDesign.CoinsCreditIcon}  name={props.iconName} color={props.iconColor} size={props.size} />
      <Text style={{color: 'white', fontWeight: 'bold'}}>{props.Text}</Text>
    </TouchableOpacity>
  )
}

export default CoinsCredit