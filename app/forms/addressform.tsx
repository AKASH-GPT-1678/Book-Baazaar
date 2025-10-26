import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { ENV } from '@/data/ENV';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const AddressForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const token = useSelector((state: RootState) => state.user.token);

  const saveAddress = async () => {
    if (!street || !city || !state || !zip) {
      Alert.alert('Please fill all fields');
      return;
    }

    const fullAddress = `${street}, ${city}, ${state} - ${zip}`;

    try {
      setLoading(true);


      const response = await axios.post(
        `${ENV.BASE_URL}/api/user/address`,
        { address: fullAddress },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert('Success', 'Address saved successfully');
      console.log(response.data);
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    } catch (error: any) {
      console.error('Error saving address:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to save address');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Address</Text>

      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zip}
        keyboardType="numeric"
        onChangeText={setZip}
      />

      <TouchableOpacity style={styles.button} onPress={saveAddress} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save Address'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
