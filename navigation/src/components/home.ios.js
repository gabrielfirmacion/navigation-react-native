var React = require('react');
var ReactNative = require('react-native');
var Logo = require('./common/logo.ios')
var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

var Home = React.createClass({
  getInitialState: function() {
    return {
      name: "Gabriel",
      age: "22",
      height: "5'4",
      weight: "155"
    }
  },
  render: function() {
    return <View style={styles.container}>
      <Logo />
      <View style={styles.body}>

        <View style={styles.profile}>
          <Text style={[styles.text,{textDecorationLine: 'underline'}]}>Profile</Text>
          <Text style={styles.text}>Name: {this.state.name}</Text>
          <Text style={styles.text}>Age: {this.state.age}</Text>
          <Text style={styles.text}>Height: {this.state.height}</Text>
          <Text style={styles.text}>Weight: {this.state.weight}</Text>
          {this.editButton()}
        </View>

        <View style={styles.currentWorkout}>
          <Text style={styles.text}>This is the current workout!</Text>
        </View>

      </View>
    </View>
  },
  editButton: function() {
    return <TouchableHighlight
      onPress={() => null}
      underlayColor="black"
      style={styles.editButton}>
      <Text>Edit</Text>
    </TouchableHighlight>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentWorkout: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 25
  },
  editButton: {
    borderWidth: 2,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Home;