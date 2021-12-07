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
} from 'react-native';

import {dummyData,COLORS, SIZES,FONTS,icons,images}from '../constants';
  


const Home = ({ navigation }) => {
function renderHeader(){
    return(
        <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal: SIZES.padding
        }}
        >
            {/* {profile} */}
            
            {/* {Screen Mirror} */}

        </View>
        )
}

    return (
     <SafeAreaView
     style={{
         flex: 1,
         backgroundColor: COLORS.black
     }}
     >
         {renderHeader()}

     </SafeAreaView>
    )
}

export default Home;