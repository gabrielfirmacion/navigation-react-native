var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  View,
  StyleSheet
} = ReactNative;

var Logo = React.createClass({
  render: function() {
    return <View style={styles.logo}>
      <Text>GAINS</Text>
    </View>
  }
});

var styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000033',
    borderWidth: 1
  },
})

module.exports = Logo;