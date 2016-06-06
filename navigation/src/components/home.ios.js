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
      name: "John Doe",
      age: "22",
      height: "5'6",
      weight: "150",
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
          <View style={styles.image}><Text>Image</Text></View>
          <View style={styles.workoutDescription}>
            <Text>Workout Name: Cardio</Text>
            <Text>Week: 5</Text>
            <Text>Day: 3</Text>
          </View>
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
      return <View style={{flex: 1}}>
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

        <Text style={styles.text}>Weight:  </Text>
        <TextInput
          style={styles.input}
          value={this.state.weight}
          onChangeText={(text) => this.setState({weight: text})}/>
      </View>
    } else {
      return <View style={{flex: 1}}>
        <Text style={styles.text}>Name:</Text>
        <Text style={styles.text}>{this.state.name}</Text>

        <Text style={styles.text}>Age:</Text>
        <Text style={styles.text}>{this.state.age}</Text>

        <Text style={styles.text}>Height:</Text>
        <Text style={styles.text}>{this.state.height}</Text>

        <Text style={styles.text}>Weight:</Text>
        <Text style={styles.text}>{this.state.weight}</Text>
      </View>
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'yellow',
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
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 25,
    width: 200,
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
  image: {
    marginTop: 50,
    marginLeft: 20,
  },
  workoutDescription: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  }
});

module.exports = Home;