import rpx from '@/utils/rpx';
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Expense() {
  let arr = Array(20).fill(0);
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {arr.map((item, index) => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: rpx(120),
            height: rpx(150),
          }}>
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: rpx(40),
              width: rpx(80),
              height: rpx(80),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="home" size={rpx(50)} />
          </View>
          <Text style={{fontSize: rpx(24)}}>还款</Text>
        </View>
      ))}
      <View style={{width: rpx(120)}} />
      <View style={{width: rpx(120)}} />
      <View style={{width: rpx(120)}} />
      <View style={{width: rpx(120)}} />
    </View>
  );
}
