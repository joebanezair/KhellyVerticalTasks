import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PageView from './sourcepages/homepage/PageView';
import jsontext from './sourcepages/jsonsdata/MyData.json'

const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name='Home' component={PageView} options={{title: jsontext.GlobalJson.Honors, headerShown: false}} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App