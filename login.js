import React from 'react';
import {Alert, Text,  View, StyleSheet, TextInput, Button } from 'react-native';





const MyFirstView = () => {
  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  loginHere = () => {

  if (text == "shiva" & number == "123"){ Alert.alert(  
            'Status',  
            'Logined succusfully',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  }
  else{
Alert.alert(  
            'Status',  
            'Login Failed',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );

  }
  }
  return (
    <View style={styles.cont}>
      <Text>
          Login
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Username"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Password"
        keyboardType="numeric"
      />
      <Button
        style={styles.input}
        title="Login"
        onPress={loginHere }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
});

export default MyFirstView;
