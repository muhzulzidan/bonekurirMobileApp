// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { HomeScreens } from './app/screens/HomeScreens';
// import { Auth } from './app/screens/auth';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FirebaseAuth } from './app/screens/firebaseAuth';


// type RootStackParamList = {
//   Home: undefined;
//   Auth:undefined;
//   FirebaseAuth:undefined;
//   options: any;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };


// const RootStack = createBottomTabNavigator<RootStackParamList>();




// export default function App() {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator screenOptions={{ headerShown: false }}>
//         <RootStack.Screen name="Home" component={HomeScreens} />
//         <RootStack.Screen name="Auth" component={Auth} />
//         <RootStack.Screen name="FirebaseAuth" component={FirebaseAuth} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }



import React from 'react';

import Routes from "./app/navigation/index";

export default function App() {
  return <Routes />;
}