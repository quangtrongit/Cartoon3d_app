import {CurrentRenderContext} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  SafeAreaView,
  Touchable,
} from 'react-native';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';

const Home = ({navigation}) => {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        {/* {profile} */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
          }}>
          <Image
            source={images.profile_photo}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}></Image>
        </TouchableOpacity>

        {/* {Screen Mirror} */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
          }}
          onPresss={() => console.log('Screen Mirror')}>
          <Image
            source={icons.airplay}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderNewSeasonSection() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contenOffset: {x: newSeasonScrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('MovieDetail', {selectedMovie: item})
              }>
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* {Thumbnail} */}
                <ImageBackground
                  source={item.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    justifyContent: 'flex-end',
                  }}
                  imageStyle={{
                    borderRadius: 40,
                  }}></ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}></Animated.FlatList>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {renderNewSeasonSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
