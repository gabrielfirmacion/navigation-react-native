var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  StyleSheet
} = ReactNative;

var Workouts = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text style={styles.text}>This is Workouts</Text>
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

module.exports = Workouts;