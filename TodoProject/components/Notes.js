import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
class Notes extends Component {
  render() {
    return (
      //key attribute is for elements that has been changed or updated
      <View style={styles.note} key={this.props.keyval}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity style={styles.noteDel} onPress={this.props.delMethod}>
          <Text style={styles.noteDelText}>DEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: 'green',
  },
  noteDel: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDelText: {
    color: 'white',
  },
});

export default Notes;
