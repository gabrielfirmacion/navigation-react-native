var React = require('react');
var ReactNative = require('react-native');
var Logo = require('./common/logo.ios')
var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput
} = ReactNative;

var Home = React.createClass({
  getInitialState: function() {
    return {
      name: "Gabriel",
      age: "22",
      height: "5'4",
      weight: "155",
      edit: false
    }
  },
  render: function() {
    return <View style={styles.container}>
      <Logo />
      <View style={styles.body}>

        <View style={styles.profile}>
          <Text style={[styles.text,{textDecorationLine: 'underline'}]}>Profile</Text>
          {this.profileInformation()}
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
      onPress={() => this.setState({ edit: !this.state.edit })}
      underlayColor="black"
      style={styles.editButton}>
      <Text>{this.state.edit? "Save" : "Edit"}</Text>
    </TouchableHighlight>
  },
  profileInformation: function() {
    if (this.state.edit) {
      return <View>
        <Text style={styles.text}>Name: </Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}/>
        <Text style={styles.text}>Age: </Text>
        <TextInput
          style={styles.input}
          value={this.state.age}
          onChangeText={(text) => this.setState({age: text})}/>
        <Text style={styles.text}>Height: </Text>
        <TextInput
          style={styles.input}
          value={this.state.height}
          onChangeText={(text) => this.setState({height: text})}/>
        <Text style={styles.text}>Weight: </Text>
        <TextInput
          style={styles.input}
          value={this.state.weight}
          onChangeText={(text) => this.setState({weight: text})}/>
      </View>
    } else {
      return <View>
        <Text style={styles.text}>Name: {this.state.name}</Text>
        <Text style={styles.text}>Age: {this.state.age}</Text>
        <Text style={styles.text}>Height: {this.state.height}</Text>
        <Text style={styles.text}>Weight: {this.state.weight}</Text>
      </View>
    }
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
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    alignSelf: 'center'
  },
});

module.exports = Home;