import React from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  PanResponderGestureState,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 15;
const FORCE_TO_OPEN_THRESHOLD = SCREEN_WIDTH / 2.2;
const LEFT_BUTTONS_THRESHOLD = SCREEN_WIDTH / 3.1;

interface ItemProps {
  swipingCheck: (swiping: boolean) => void;
  message?: string;
  id: any;
  cleanFromScreen: (id: any) => void;
  leftButtonPressed: (type: 'copy' | 'edit') => void;
  deleteButtonPressed: () => void;
  editButtonPressed: () => void;
}

export default function Item(props: ItemProps) {
  const positionRef = React.useRef<Animated.ValueXY>(
    new Animated.ValueXY({x: 0, y: 0}),
  );

  const [leftContent, setLeftContent] = React.useState({
    text: '删除',
    bgColor: '#999',
  });

  const scrollStopped = React.useRef(false);

  const enableScrollView = (isEnabled: boolean) => {
    if (scrollStopped.current !== isEnabled) {
      props.swipingCheck(isEnabled);
      scrollStopped.current = isEnabled;
    }
  };

  const resetPosition = () => {
    Animated.timing(positionRef.current, {
      toValue: {x: 0, y: 0},
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const completeSwipe = (dimension: 'left' | 'right', callback: () => void) => {
    callback();
  };

  const userSwipedRight = (gesture: PanResponderGestureState) => {
    resetPosition();
    if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
      // 复制
      completeSwipe('right', () => props.leftButtonPressed('copy'));
    } else if (gesture.dx >= LEFT_BUTTONS_THRESHOLD) {
      // 编辑
      completeSwipe('right', () => props.leftButtonPressed('edit'));
    }
  };
  const getLeftButtonProps = () => {
    const opacity = positionRef.current.x.interpolate({
      inputRange: [30, 75, 320],
      outputRange: [0, 1, 1],
    });
    const width = positionRef.current.x.interpolate({
      inputRange: [20, 70],
      outputRange: [20, 70],
    });
    return {
      opacity,
      width,
    };
  };
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx >= SCROLL_THRESHOLD) {
          enableScrollView(true);
          const x = gesture.dx - SCROLL_THRESHOLD;
          positionRef.current.setValue({x, y: 0});
        }
        // 右侧手势，暂时用不到
        // else if (gesture.dx <= -SCROLL_THRESHOLD) {
        // enableScrollView(true);
        // const x = gesture.dx + SCROLL_THRESHOLD;
        // position.setValue({x, y: 0});
        // }
        if (gesture.dx > FORCE_TO_OPEN_THRESHOLD) {
          setLeftContent({text: '复制', bgColor: '#e35d88'});
        } else if (gesture.dx > LEFT_BUTTONS_THRESHOLD) {
          setLeftContent({text: '编辑', bgColor: '#47ab94'});
        } else {
          setLeftContent({text: '取消', bgColor: '#999'});
        }
      },
      onPanResponderRelease: (event, gesture) => {
        positionRef.current.flattenOffset();
        if (gesture.dx > 0) {
          userSwipedRight(gesture);
        } else if (gesture.dx < 0) {
          // this.userSwipedLeft(gesture);
        } else {
          resetPosition();
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(positionRef.current, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  );
  const {containerStyle, leftButtonContainer, textContainer} = styles;
  return (
    <View style={containerStyle}>
      <Animated.View
        style={[
          leftButtonContainer,
          {backgroundColor: leftContent.bgColor},
          getLeftButtonProps(),
        ]}>
        <View>
          <Text style={{color: 'white'}}>{leftContent.text}</Text>
        </View>
      </Animated.View>
      <Animated.View
        {...panResponder.current.panHandlers}
        style={[textContainer, positionRef.current.getLayout()]}
      />
      {/* <Animated.View style={[rightButtonContainer, this.getRightButtonProps()]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 5,
    marginTop: 30,
    elevation: 3,
  },
  textContainer: {
    width: SCREEN_WIDTH / 1.03,
    paddingHorizontal: 30,
    paddingVertical: 35,
    borderRadius: 7,
    backgroundColor: '#CFD8DC',
    elevation: 3,
    zIndex: 2,
  },
  rightButtonContainer: {
    position: 'absolute',
    left: SCREEN_WIDTH / 1.24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 23,
    elevation: 3,
    backgroundColor: '#D50000',
    zIndex: 1,
  },
  leftButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingVertical: 25,
    flex: 1,
    position: 'absolute',
    elevation: 3,
  },
});
