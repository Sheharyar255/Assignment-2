import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 32,
            marginTop: 5,
          }}
        >
          SIGN IN
        </Text>

        <TextInput placeholder="UserName" style={styles.Input} />
        <TextInput placeholder="Password" style={styles.Input}/>

        <TouchableOpacity style={styles.button}>SIGN IN</TouchableOpacity>


        <Text style={
          {
            color:"grey",
            marginTop:40
          }
        }>Forgot Password
        <Text style={{color:"red"}}> Create an account</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 400,
    height: 400,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor: "#fff",
  },

  Input: {
    borderColor:"grey",
    color: "black",
    borderWidth:2,
    height:50,
    width: 300,
    marginTop: 40,
    paddingLeft: 20,
  },
  button: {
    width: 300,
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 20,
    height: 50,
    justifyContent: "center",
    marginTop: 50,
    color:"grey"
  },
});
