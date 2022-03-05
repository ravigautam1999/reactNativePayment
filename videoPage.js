/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Video, { FilterType } from 'react-native-video';
const VideoPage = () => {
    return (
        <View style={{flex: 1, backgroundColor:'black'}}>

        <Video
         filter={FilterType.SEPIA}
         filterEnable={true}
         controls={true}
         //fullscreen={true}
         volume={0.0}
         muted={true}
         onEnd={() => console.log('video end')}
         source={require('./image/vd.mp4')}   // Can be a URL or a local file.
     //    ref={(ref) => {
     //      this.player = ref
     //    }}                                      // Store reference
        //onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //onError={this.videoError}               // Callback when video cannot be loaded
        style={{flex: 1}} />
        </View>
        

    )
}

export default VideoPage;

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      height: `100%`,
      width: `100%`,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      
    },
  });