import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";

class HomScreen extends Component {
  
  static navigationOptions = {
    title: 'Home', 
    // headerStyle: {
    //   backgroundColor: "#f4511e"
    // },
    // headerTintColot: "#fff",
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // }

  }

  gotoDetailScreen = () => {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Details" })]
      })
    );
  };

  gotoDetailScreen1 = () => {
    this.props.navigation.navigate("Details");
  };
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text> Hello From Home Screen!! </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Go to Detail Screen by Change initialRoute"
            onPress={this.gotoDetailScreen}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Go to Detail by push another stack screen"
            onPress={this.gotoDetailScreen1}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>Passing Parameters to routes</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.navigate('Details', {
                itemId: 16, 
                otherParam: 'My secret key params!'
              })
            }}
          />
        </View>
      </View>
    );
  }
}

export default HomScreen;
