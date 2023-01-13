import rpx from '@/utils/rpx';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Appbar, Card, Text} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Appbar.Header>
        <Appbar.Action icon="notebook" color="#47ab94" />
        <Appbar.Content title="" />
        <Appbar.Action icon="magnify" color="#47ab94" />
        <Appbar.Action icon="dots-vertical" color="#47ab94" />
      </Appbar.Header>
      <ScrollView style={styles.view}>
        <Card style={{backgroundColor: '#47ab94'}}>
          <Card.Content>
            <Text style={{color: 'white'}}>test</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
  view: {
    paddingHorizontal: rpx(20),
  },
});
export default App;
