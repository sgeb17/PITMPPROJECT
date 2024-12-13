import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LogInModels } from "./models";
import { router } from "expo-router";

const Login = () => {
  const [credentials, setCredentials] = useState<LogInModels>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.subtitle}>Please sign in to your existing account</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor="#888"
        onChangeText={(val) => setCredentials({ ...credentials, email: val })}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={(val) => setCredentials({ ...credentials, password: val })}
        secureTextEntry
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={toggleRememberMe}
          style={[
            styles.checkbox,
            rememberMe ? styles.checkboxChecked : styles.checkboxUnchecked,
          ]}
        />
        <Text style={styles.label}>Remember me</Text>
        <TouchableOpacity
          onPress={() => alert("Forgot Password Clicked")}
          style={styles.forgotPasswordContainer}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/(tabs)/explore")}
      >
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <Text style={styles.signUpPrompt}>Don’t have an account? <Text style={styles.signUp} onPress={() => alert("Sign Up Clicked")}>SIGN UP</Text></Text>

      {/* Or Separator */}
      <Text style={styles.orSeparator}>Or</Text>

      {/* Social Media Buttons (Placeholder) */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Facebook</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Twitter</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text style={styles.socialText}>Apple</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#14142B", // Dark background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E4E4E7",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    color: "#FFFFFF",
    backgroundColor: "#1E1E2E",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
  },
  checkboxUnchecked: {
    borderColor: "#888",
  },
  checkboxChecked: {
    borderColor: "#ffae42",
    backgroundColor: "#ffae42",
  },
  label: {
    color: "#FFFFFF",
    marginLeft: 8,
  },
  forgotPasswordContainer: {
    marginLeft: "auto",
  },
  forgotPassword: {
    color: "#ffae42",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#ffae42",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpPrompt: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 16,
  },
  signUp: {
    color: "#ffae42",
    fontWeight: "bold",
  },
  orSeparator: {
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    width: 100,
  },
  socialText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Login;