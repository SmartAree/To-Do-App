import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Notes from './Notes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      noteArray: [],
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      //map the notes from noteArray that allow us to map values to keys
      //this will loop all the notes which will return the <Notes/> component
      return (
        <Notes
          key={key} //passes props to the parents
          keyval={key}
          val={val}
          delMethod={() => this.delMethod(key)} //passes the key as an argument
        />
      );
    });
    return (
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> To-Do List </Text>
        </View>

        <ScrollView style={styles.list}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            placeholder="> Add Notes <"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(noteText) => {
              this.setState({noteText});
            }}
            value={this.state.noteText}
            style={styles.typeInput}></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={this.addTask.bind(this)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      //bind connect a function within an object
    );
  }
  addTask() {
    if (this.state.noteText) {
      var date = new Date();
      this.state.noteArray.push({
        date:
          date.getFullYear() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getDate(),
        note: this.state.noteText, //notes value in the noteArray
      });
      this.setState({noteArray: this.state.noteArray}); //settong the value of noteArray
      this.setState({noteText: ''}); //reset noteText empty
    }
  }
  delMethod(key) {
    this.state.noteArray.splice(key, 1); //Splice chnages the content of noteArray by removing existing elements and adding new elements
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#A946BD',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 3,
  },

  headerText: {
    color: 'white',
    fontSize: 30,
    padding: 15,
  },

  list: {
    flex: 1,
    marginBottom: 100,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  typeInput: {
    alignSelf: 'stretch',
    color: 'white',
    padding: 20,
    backgroundColor: '#A946BD',
    borderTopWidth: 2,
    borderTopColor: '#C5C5C5',
  },

  button: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#A946BD',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});
export default Main;
