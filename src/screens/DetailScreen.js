import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationActions, StackActions } from "react-navigation";

export default class DetailScreen extends Component {


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Hello from Detail Screen </Text>
        <Button 
            title="Go to HomeScreen"
            onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'Home'})]
                }))
            }}
        />
      </View>
    );
  }
}
