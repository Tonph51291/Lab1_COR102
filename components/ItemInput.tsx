import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface CustomInputProps {
  title: string;
  label?: string;
  placeholder: string;
  value: string;
  error: string;
  onTextChange: (text: string) => void;
}

export default function ItemInput({
  placeholder,
  value,
  onTextChange,
  title,
  error,
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    setIsError(value.trim().length === 0); // Báo lỗi nếu input trống khi mất focus
  };

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginBottom: 10 }}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={[
          styles.containerInput,
          isFocused && styles.inputFocused,
          isError && styles.inputError, // Chỉ báo lỗi khi input trống
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChangeText={(text) => {
          setIsError(text.trim().length === 0);
          onTextChange(text);
        }}
      />
      {isError && (
        <Image
          style={{ position: "absolute", top: 40, right: 10 }}
          source={require("../assets/images/mark.png")}
        />
      )}
      <Text style={{ color: "red" }}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "blue",
  },
  inputError: {
    borderColor: "red",
    backgroundColor: "#ffe6e6",
  },
});
