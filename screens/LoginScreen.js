import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate('Transaction');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User does not exist');
            console.log('User does not exist');
            break;

          case 'auth/invalid-email':
            alert('Incorrect Email or password...');
            console.log('Invalid email or password');
            break;
        }
      }
    } else {
      alert('Enter email id and password');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <Image
            source={require('../assets/booklogo.jpg')}
            style={{ width: 200, height: 200, alignSelf:'center' }}
          />
          <Text style={{ textAlign: 'center', fontSize: 30 }}>Wily</Text>
        </View>

        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Email Id"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="Enter pwd"
            secureTextEntry = {true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>

        <View>
          <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.login(this.state.emailId, this.state.password)
          }}>
          <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width:300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft:10
  },
  loginButton: {
    height: 30,
    width: 90,
    borderWidth: 1,
    marginTop:20,
    paddingTop:5,
    borderRadius:7,
    alignSelf:'center'
  }
}) 
