var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  StyleSheet
} = ReactNative;

var Logo = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text style={styles.text}>Gains</Text>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});

module.exports = Logo;