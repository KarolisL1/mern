import { TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation ();

  return (
    <View>

      <TouchableOpacity 
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false, //paslepi virsuje pavadinima
            }}
          />
          <Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false, //paslepi virsuje pavadinima
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen