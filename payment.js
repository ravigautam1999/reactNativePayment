/* eslint-disable quotes */
/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity,Button, TouchableHighlight, ToastAndroid} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';



const Payment = () => {

    const makePeyment = () => {
        var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_2Bb9X44NCgOD4f',
        amount: '5000',
        name: 'Acme Corp',
       // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: 'Gaurav Kumar'
        },
        theme: {color: '#53a20e'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        console.log(data)
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
    }
  
  return (
    <View  style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
       <Button title="press" onPress={makePeyment} />
    </View>
  );
};

export default Payment;
