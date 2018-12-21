import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "No Param Passing!")
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "kuyhorm!");

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text> Hello from Detail Screen </Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Home" })]
              })
            );
          }}
        />
        <Button
          title="Navigate to Details Screen :p"
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        />
        <Button
          title="Push Details Stack"
          onPress={() => {
            this.props.navigation.push("Details");
          }}
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Detail Screen</Text>
          <Button
            title="Go to Detail... Again"
            onPress={() => this.props.navigation.push("Details")}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Detail Screen from passing Param</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Update the title"
            onPress={() =>
              this.props.navigation.setParams({ otherParam: "Updated!" })
            }
          />
        </View>
      </View>
    );
  }
}
