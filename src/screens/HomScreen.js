import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";

class HomScreen extends Component {
  gotoDetailScreen = () => {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Details" })]
      })
    );
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Hello From Home Screen!! </Text>
        <Button title="Go to Detail Screen" onPress={this.gotoDetailScreen} />
      </View>
    );
  }
}

export default HomScreen;
