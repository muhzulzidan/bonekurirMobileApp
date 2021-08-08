import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const FirebaseAuth = () => {
    
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: React.SetStateAction<FirebaseAuthTypes.User | null>) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}