import SwipeableList from '@/components/swipeableList';
import rpx from '@/utils/rpx';
import React from 'react';
import {
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Appbar, Button, Card, Menu, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const bookRef = React.useRef<any>();
  const [visible, setVisible] = React.useState(false);

  const [anchor, setAnchor] = React.useState({x: 0, y: 0});

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const _onLayout = (e: LayoutChangeEvent) => {
    let {y, width, height} = e.nativeEvent.layout;
    // remove padding
    setAnchor({x: width - 20, y: y + height + 10});
  };
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Appbar.Header style={{backgroundColor: '#f6f6f6'}}>
        <Appbar.Action
          onPress={openMenu}
          ref={bookRef}
          icon="notebook"
          color="#47ab94"
          onLayout={_onLayout}
        />
        <Appbar.Content
          titleStyle={{
            fontSize: rpx(35),
            marginLeft: rpx(-20),
            color: '#666666',
            fontWeight: 'bold',
          }}
          title={'日常账本'}
          onPress={openMenu}
        />

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={anchor}
          contentStyle={{backgroundColor: 'white'}}>
          <Menu.Item
            onPress={() => {}}
            title={
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  size={rpx(36)}
                  style={{color: '#47ab94'}}
                  name="plus-circle-outline"
                />
                <Text
                  style={{
                    fontSize: rpx(30),
                    marginLeft: rpx(10),
                    color: '#47ab94',
                  }}>
                  新增账本
                </Text>
                <Icon
                  style={{marginLeft: rpx(40)}}
                  size={rpx(36)}
                  name="book-edit-outline"
                />
              </View>
            }
          />
          <Menu.Item
            titleStyle={{fontSize: rpx(30)}}
            onPress={() => {}}
            title="账本1"
          />
          <Menu.Item
            titleStyle={{fontSize: rpx(30)}}
            onPress={() => {}}
            title="账本2"
          />
        </Menu>

        <Appbar.Content title="" />
        <Appbar.Action icon="magnify" color="#47ab94" />
        <Appbar.Action icon="dots-vertical" color="#47ab94" />
      </Appbar.Header>
      <ScrollView style={styles.view}>
        <Card style={{backgroundColor: '#47ab94'}}>
          <Card.Content>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: rpx(20),
              }}>
              <View style={{marginRight: rpx(25)}}>
                <Text
                  style={{color: 'white', marginBottom: rpx(10)}}
                  variant="labelLarge">
                  本月收入
                </Text>
                <Text
                  variant="titleMedium"
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  222.00
                </Text>
              </View>
              <View style={{marginRight: rpx(25)}}>
                <Text style={{color: 'white', marginBottom: rpx(10)}}>
                  本月结余
                </Text>
                <Text
                  variant="titleMedium"
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  -343.12
                </Text>
              </View>
              <View style={{marginRight: rpx(25)}}>
                <Text style={{color: 'white', marginBottom: rpx(10)}}>
                  剩余预算
                </Text>
                <Text
                  variant="titleMedium"
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  1,888.00
                </Text>
              </View>
            </View>
            <View>
              <Text style={{color: 'white'}}>本月支出</Text>
              <Text
                style={{color: 'white', fontSize: rpx(50), fontWeight: 'bold'}}>
                500.23
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Button
          onPress={() => {
            console.log(111);
          }}
          textColor="white"
          buttonColor="#47ab94"
          icon="book-plus-outline"
          contentStyle={{paddingVertical: rpx(8)}}
          style={{
            marginTop: rpx(30),
            borderRadius: rpx(15),
          }}>
          添加一条新记账
        </Button>

        {/* <FlatList
        ></FlatList> */}
        <View>
          {/* 当前日期 收支统计 */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: rpx(10),
              marginTop: rpx(30),
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginRight: rpx(20),
                  fontSize: rpx(26),
                }}>
                今天
              </Text>
              <Text style={{color: '#9c9c9c', fontSize: rpx(26)}}>周五</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{marginRight: rpx(15)}}>
                <Text style={{color: '#9c9c9c', fontSize: rpx(26)}}>收:</Text>
                <Text style={{color: '#47ab94', fontSize: rpx(26)}}>0.00</Text>
              </Text>
              <Text>
                <Text style={{color: '#9c9c9c', fontSize: rpx(26)}}>支: </Text>
                <Text style={{color: '#f65859', fontSize: rpx(26)}}>50.00</Text>
              </Text>
            </View>
          </View>
          {/* 当前日期 收支明细 */}
          <SwipeableList data={[{id: 1}, {id: 2}]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#f6f6f6',
  },
  view: {
    paddingHorizontal: rpx(30),
    paddingTop: rpx(20),
    // backgroundColor: 'white',
  },
});
export default App;
