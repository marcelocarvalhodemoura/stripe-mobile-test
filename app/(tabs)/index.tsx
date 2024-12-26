import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import CustomWebView from '@/components/webview';

export default function HomeScreen() {
  const [webviewVisible, setWebviewVisible] = useState(false);
  const [stripeUrl, setStripeUrl] = useState('');

  //its necessary to make request to set the url
  // axios.get('https://api.stripe.com/v1/checkout/sessions')
  //   .then(response => {
  //     setStripeUrl(response.data.url);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  return (
    <>
    <View style={styles.container}>
     
      <Text style={styles.title}>Teste webview pagamento stripe</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {  
          setWebviewVisible(true);
          console.log('Button pressed');
        }}
      >
        <Text style={styles.buttonText}>Assinar Serviço</Text>
      </TouchableOpacity>
    </View>
    <CustomWebView
      visible={webviewVisible}
      url={stripeUrl}
      onSuccess={() => {
        console.log('Pagamento realizado com sucesso!'); 
        setTimeout(() => {
          setWebviewVisible(false);
        }, 3000);
      }}
      onCancel={() => {
        console.log('Pagamento cancelado!'); 
        setTimeout(() => {
          setWebviewVisible(false);
        }, 3000);
      }}
    />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});