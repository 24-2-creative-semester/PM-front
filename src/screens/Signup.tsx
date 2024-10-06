import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <TouchableOpacity style={styles.profilePic}>
        <Text style={styles.profilePicText}>선택</Text>
      </TouchableOpacity>

      <View style={styles.genderContainer}>
        <TouchableOpacity style={styles.genderButton}>
          <Text>남성</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderButton}>
          <Text>여성</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D88FF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicText: {
    color: '#4D88FF',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#0088FF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Signup;
