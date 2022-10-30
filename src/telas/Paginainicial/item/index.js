import React, { useState, useEffect } from 'react';
import
  {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard
  } from 'react-native';

import styles from './styles';

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

  useEffect(() => {
    keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    keyboardDidHideListener
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100
      })
    ]).start();
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/43d5a91a4c57da52a4b0fb862775dc46',
        }}
      />
        </View>

        <Animated.View style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Digite o seu Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a sua Senha"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.buttonSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Crie sua conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};