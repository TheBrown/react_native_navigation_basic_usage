import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class LogoTitle extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', margin: 10}}>
        <Image
          source={{
            uri:
              "https://beartrust.org/wp-content/uploads/2016/08/Bear-Den-photo.jpg"
          }}
          style={{ width: 30, height: 30 }}
        />
        <Text style={{margin: 10, fontWeight: 'bold', color: '#fff'}}>Home</Text>
      </View>
    );
  }
}

export default LogoTitle;
