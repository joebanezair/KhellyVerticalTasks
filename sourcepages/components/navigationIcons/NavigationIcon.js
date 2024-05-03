import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Removed curly braces
import AppDesign from '../../design/StyleSheetD';

const NavigationIcon = (props) => {
  return (
    <TouchableOpacity style={AppDesign.NavigationTouchableOpacity} onPress={props.iconPressed}>
      <Icon style={AppDesign.NavigationInsideIcon} name={props.iconName} size={props.size} color={props.iconColor} />
    </TouchableOpacity>
  );
};

export default NavigationIcon;
