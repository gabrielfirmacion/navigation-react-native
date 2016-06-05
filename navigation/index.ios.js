var React = require('react');
var ReactNative = require('react-native');
var Home = require('./src/components/home.ios');
var Log = require('./src/components/log.ios');
var Workouts = require('./src/components/workouts.ios');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = ReactNative;

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home'
    }
  },
  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          icon={require('./src/icons/home.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Home />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'workouts'}
          title="Workouts"
          onPress={() => {
            this.setState({
              selectedTab: 'workouts',
            });
          }}>
          <Workouts />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'logs'}
          title="Logs"
          onPress={() => {
            this.setState({
              selectedTab: 'logs',
            });
          }}>
          <Log />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
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