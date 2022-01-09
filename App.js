// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      {/* going to next screen  */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}


// general history good for nested navigation 

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      {/* to going more deeper into details screen(nested screens hv same name here) */}

      {/* Let's suppose that we actually want to add another details screen.
       This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about params!). To do this, we can change navigate to push.
       This allows us to express the intent to add another route regardless of the existing navigation history. */}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />

     
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />


       {/* w/o using back arrow you can move back 1 step */}
      <Button title="Go back" onPress={() => navigation.goBack()} />

{/* 
directly coming back to HomeScreen */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{ title: 'Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;