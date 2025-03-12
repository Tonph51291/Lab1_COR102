import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface CustomInputProps {
  label?: string;
  placeholder: string;
  value: string;
  onTextChange: (text: string) => void;
}

export default function ItemInput({
  placeholder,
  value,
  onTextChange,
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    setIsError(value.trim().length === 0); // Báo lỗi nếu input trống khi mất focus
  };

  return (
    <View>
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
        onChangeText={() => {
          setIsError(value.trim().length === 0);
          onTextChange(value);
        }}
      />
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
