var React = require('react');
var ReactNative = require('react-native');
var Logo = require('./common/logo.ios')
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

        <View style={styles.profile}>
          <Text style={styles.text}>This is the Profile!</Text>
        </View>

        <View style={styles.currentWorkout}>
          <Text style={styles.text}>This is the current workout!</Text>
        </View>

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
  },
  profile: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  currentWorkout: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  }
});

module.exports = Home;