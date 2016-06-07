/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ListView
} from 'react-native';

const App = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Mike', 'Juliet', 'Ann', 'Douglas', 'John', 'Rodick', 'Paris'])
    };
  },
  render: function() {
    return (
      <View>
        <Text>Hello Heqi!</Text>
        <Image source={require('./assets/images/logo.png')} />
        <TextInput placeholder="Hello" style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 4}}/>
        <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>}/>
      </View>
    )
  }
});

AppRegistry.registerComponent('RNStepByStep', () => App);
