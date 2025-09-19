import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const SignUp = () => {
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sidedisplay} className='relative'>
            <Ionicons name="arrow-back" size={26} color="black" className='absolute left-4' 
            onPress={()=> router.back()}
            
            
            
            />
                <Text style={styles.header}>BookBaazar</Text>

                <View style={styles.view1}>
                    <Text style={styles.loginTitle}>Create your Account</Text>

                    {/* Email */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your email"
                            placeholderTextColor="#A1A1A1"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your password"
                            placeholderTextColor="#A1A1A1"
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Confirm Password */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm your password"
                            placeholderTextColor="#A1A1A1"
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                    </View>

                  
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.loginButton}
                            onPress={() => console.log('Sign Up pressed')}
                        >
                            <Text style={styles.loginButtonText}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Or sign up with */}
                <View style={{ marginTop: 40, display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text>--Or Sign up with--</Text>
                    <View style={{ marginTop: 24, flexDirection: "row", gap: 20 }}>
                        <Image source={require('../assets/images/google.png')} alt='google' style={{ height: 30, width: 30 }} />
                        <Image source={require('../assets/images/facebook.png')} alt='facebook' style={{ height: 30, width: 30 }} />
                        <Image source={require('../assets/images/twitter.png')} alt='twitter' style={{ height: 30, width: 30 }} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    sidedisplay: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    header: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 40,
        color: "#111",
    },
    view1: {
        width: "100%",
        maxWidth: 400,
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 32,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: '#F8F9FA',
        color: '#333333',
    },
    buttonContainer: {
        marginTop: 28,
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});
