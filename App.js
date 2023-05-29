import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//-----------------------------------------------------------------------------
const Stack = createNativeStackNavigator();
//-----------------------------------------------------------------------------
import { Inicio } from './pages/Inicio';
//-----------------------------------------------------------------------------
import { Cadpai } from './pages/Cadpai';
import { Cadbaba } from './pages/Cadbaba';
//-----------------------------------------------------------------------------
import { Login } from './pages/Login';
//-----------------------------------------------------------------------------
import { Home } from './pages/Home';
//-----------------------------------------------------------------------------
import { Perfilpai } from './pages/Perfilpai';
import { Chatpai } from './pages/Chatpai';
import { Conversapai } from './pages/Conversapai';
import { Procura } from './pages/Procura';
import { Procurapref } from './pages/Procurapref';
//-----------------------------------------------------------------------------
import { Match } from './pages/Match';
//-----------------------------------------------------------------------------
import { Perfilbaba } from './pages/Perfilbaba';
import { Chatbaba } from './pages/Chatbaba';
import { Conversababa } from './pages/Conversababa';
//-----------------------------------------------------------------------------
import { Suporte } from './pages/Suporte';
//-----------------------------------------------------------------------------
import { useFonts, Comfortaa_400Regular, Comfortaa_300Light, Comfortaa_600SemiBold } from '@expo-google-fonts/comfortaa';
//-----------------------------------------------------------------------------
export default function App() {

  const [fonteLoaded] = useFonts({
    Comfortaa_600SemiBold,
    Comfortaa_400Regular,
    Comfortaa_300Light,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerShown: false,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Cadastro de Pais"
          component={Cadpai}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Cadastro de Babás"
          component={Cadbaba}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Perfil - Pais"
          component={Perfilpai}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Chat - Pais"
          component={Chatpai}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Feather name="arrow-left" size={25} />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="Ana Carolina"
          component={Conversapai}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Procura"
          component={Procura}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Preferências"
          component={Procurapref}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Match!"
          component={Match}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Perfil - Babás"
          component={Perfilbaba}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Chat - Babás"
          component={Chatbaba}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Luiz Felipe"
          component={Conversababa}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Suporte"
          component={Suporte}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
