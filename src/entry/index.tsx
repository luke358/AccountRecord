import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
// import {routes} from './router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TabBar from '@/components/tabBar';
import {StatusBar} from 'react-native';

// const Stack = createNativeStackNavigator<any>();

const App = () => {
  StatusBar.setBackgroundColor('transparent');

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            {/* <Stack.Navigator
              initialRouteName={routes[0].path}
              screenOptions={{
                statusBarColor: 'transparent',
                statusBarTranslucent: false,
                headerShown: false,
                animation: 'slide_from_right',
                animationDuration: 200,
              }}>
              {routes.map(route => (
                <Stack.Screen
                  key={route.path}
                  name={route.path}
                  component={route.component}
                />
              ))}
            </Stack.Navigator> */}
            <TabBar />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
