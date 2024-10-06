import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/LoginStyles';  // 스타일 파일을 import

const LoginScreen = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('로그인 버튼 클릭');
  };

  const handleSignup = () => {
    //navigation.navigate('Signup');
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 버튼 클릭');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PM</Text>
      <Text style={styles.subtext}>당신만을 위한 건강, 지금 로그인하세요!</Text>

      <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="#888"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      <Text style={styles.signupPrompt}>아직 계정이 없으신가요?</Text>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>회원가입</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>간편 로그인</Text>
        <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoLogin}>
          <Icon name="comment" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
