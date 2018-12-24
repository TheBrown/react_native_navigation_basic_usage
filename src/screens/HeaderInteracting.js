import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { NavigationActions, StackActions } from "react-navigation";

import LogoTitle from "./LogoTitle";

class HeaderInteracting extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#fff100",
              padding: 10
            }}
            onPress={navigation.getParam("increaseCount")}
          >
            <Text> +1 </Text>
          </TouchableOpacity>
        </View>
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>Header Interacting Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
        onPress={()=>this.setState({count: 0})}
        title="reset"
        />
      </View>
    );
  }
}

export default HeaderInteracting;
