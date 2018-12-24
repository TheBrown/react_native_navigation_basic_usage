import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class ModalScreen extends Component {
    static navigationOptions = {
        header: null,
        };
    render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}> This is Fullscreen Modal </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
