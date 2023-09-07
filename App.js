import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
// import { StripeProvider } from '@stripe/stripe-react-native';


const Stack = createNativeStackNavigator();
// const STRIPE_KEY='pk_test_51NcC2xSAU9k44JQPb5gRT8pxS6GEEDSxCR0uPv7c7yU9ueoeaftpXZkQpdBUEkZiZy0g8MRRKdzi0hndz4OgmK4A00DQdxSNV9'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        {/* <StripeProvider publishableKey={STRIPE_KEY} > */}
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false
              }}
            />
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
              options={{
                presentation: "fullScreenModal",
                headerShown: false
              }}
            />
            <Stack.Screen name="Delivery" component={DeliveryScreen}
              options={{
                presentation: "fullScreenModal",
                headerShown: false
              }}
            />
          </Stack.Navigator>
        {/* </StripeProvider> */}
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
