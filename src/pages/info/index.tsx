import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="transparent" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>info</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
