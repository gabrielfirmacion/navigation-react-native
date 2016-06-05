var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = ReactNative;

var Navigation = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('navigation', () => Navigation);