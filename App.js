
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

// Exercise 1 - Function Component
function Welcome(props) {
  return (
    <Text>Welcome to {props.code} - {props.name}</Text>
  );
}

// Exercise 2 / 3 - Class Component
class ModuleInfo extends Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C105" name="Introduction to Programming" />
        <Welcome code="C346" name="Mobile App Development" />
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
