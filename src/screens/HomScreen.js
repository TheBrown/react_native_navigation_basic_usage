import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";

import LogoTitle from "./LogoTitle";

class HomScreen extends Component {
  static navigationOptions = {
    // title: 'Home',
    headerTitle: <LogoTitle />,
    headerRight: (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#fff100",
            padding: 10
          }}
          onPress={() => {
            alert("This is a Fake Button!");
          }}
        >
          <Text> Info </Text>
        </TouchableOpacity>
      </View>
    )
  };

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
        <View style={{ flex: 1 }}>
          <Text>Passing Parameters to routes</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.navigate("Details", {
                itemId: 16,
                otherParam: "My secret key params!"
              });
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>Header Interacting with component instance V3</Text>
          <Button
            title="Go to Header Interacting"
            onPress={() => {
              this.props.navigation.navigate("HeaderInteracting");
            }}
          />
        </View>

        <View style={{flex: 1}}>
            <Text>Open FullScreen Modal</Text>
            <Button
              title="Test Modal"
              onPress={()=>this.props.navigation.navigate('MyModal')}
            />
        </View>
        <View style={{flex:1}}>
          <Text>Open Drawer Navigator</Text>
          <Button
          title="Open Drawer"
          onPress={()=>this.props.navigation.toggleDrawer()}
          />
        </View>
      </View>
    );
  }
}

export default HomScreen;
