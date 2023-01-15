import rpx from '@/utils/rpx';
import React from 'react';
import {ScrollView} from 'react-native';
import Item from './item';

interface SwipeableListProps {
  data: any[];
}
export default function SwipeableList(props: SwipeableListProps) {
  const {data} = props;
  const [swiping, setSwiping] = React.useState<boolean>(false);

  const cleanFromScreen = (_id: any) => {};
  const renderItems = () => {
    return data.map(item => {
      return (
        <Item
          key={item.id}
          swipingCheck={(_swiping: boolean) => setSwiping(_swiping)}
          // message={item.message}
          id={item.id}
          cleanFromScreen={(id: any) => cleanFromScreen(id)}
          leftButtonPressed={type => console.log('type', type)}
          deleteButtonPressed={() => console.log('delete button pressed')}
          editButtonPressed={() => console.log('edit button pressed')}
        />
      );
    });
  };
  return (
    <ScrollView
      style={{borderRadius: rpx(20), overflow: 'hidden'}}
      scrollEnabled={!swiping}>
      {renderItems()}
    </ScrollView>
  );
}
