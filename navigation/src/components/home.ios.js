var React = require('react');
var ReactNative = require('react-native');
var Logo = require('./logo.ios')
var {
  Text,
  View,
  StyleSheet
} = ReactNative;

var Home = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Logo />
      <View style={styles.body}>
        <Text style={styles.text}>This is Home!</Text>
      </View>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Home;